import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import {
	signinInputSchema,
	signupInputSchema,
} from "@kartikay_2202/medium-common";
import { cors } from "hono/cors";

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
}>();

userRouter.post("/signup", async (c) => {
	const body = await c.req.json();
	const { success, error } = signupInputSchema.safeParse(body);
	if (!success) {
		c.status(411);
		return c.text(error.message);
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const user = await prisma.user.create({
			data: {
				name: body.name,
				email: body.email,
				password: body.password,
			},
		});
		const jwt = await sign(
			{
				id: user.id,
			},
			c.env.JWT_SECRET
		);
		return c.json({ jwt });
	} catch (e: any) {
		c.status(403);
		return c.text(e.message);
	}
});

userRouter.post("/signin", async (c) => {
	const body = await c.req.json();

	const { success } = signinInputSchema.safeParse(body);
	if (!success) {
		c.status(411);
		return c.text("Invalid input");
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const user = await prisma.user.findUnique({
		where: {
			email: body.email,
			password: body.password,
		},
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "Invalid credentials" });
	}

	const jwt = await sign(
		{
			id: user.id,
		},
		c.env.JWT_SECRET
	);

	return c.json({ jwt });
});
