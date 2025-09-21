import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import {
	createBlogInputSchema,
	updateBlogInputSchema,
} from "@kartikay_2202/medium-common";
import { cors } from "hono/cors";

export const postRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

postRouter.use("/*", async (c, next) => {
	const token = c.req.header("Authorization") || "";

	try {
		const user = await verify(token, c.env.JWT_SECRET);

		if (user) {
			c.set("userId", (user as { id: string }).id);
			await next();
		} else {
			c.status(401);
			return c.json({ error: "Unauthorized" });
		}
	} catch (e) {
		c.status(401);
		return c.json({ error: "Unauthorized" });
	}
});

postRouter.post("/", async (c) => {
	const body = await c.req.json();

	const { success } = createBlogInputSchema.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "Invalid input",
		});
	}

	const authorId = c.get("userId");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: authorId,
		},
	});

	return c.json({
		id: post.id,
	});
});

postRouter.put("/:id", async (c) => {
	const body = await c.req.json();
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const id = c.req.param("id");

	const { success } = updateBlogInputSchema.safeParse(body);

	if (!success) {
		c.status(411);
		return c.json({
			message: "Invalid input",
		});
	}

	const post = await prisma.post.update({
		where: {
			id: id,
		},
		data: {
			title: body.title,
			content: body.content,
		},
	});

	return c.json({
		id: post.id,
	});
});

postRouter.get("/:id", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const id = c.req.param("id");

	try {
		const post = await prisma.post.findUnique({
			where: {
				id: id,
			},
		});

		return c.json({ post });
	} catch (e) {
		c.status(411);
		return c.json({
			message: "Error while fetching post",
		});
	}
});

postRouter.get("/posts/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const posts = await prisma.post.findMany();

	return c.json({ posts });
});
