import z from "zod";

export const signupInputSchema = z.object({
	email: z.email(),
	password: z.string().min(6).max(100),
	name: z.string().optional(),
});

export const signinInputSchema = z.object({
	email: z.email(),
	password: z.string().min(6).max(100),
});

export const createBlogInputSchema = z.object({
	title: z.string().min(1).max(100),
	content: z.string().min(1).max(10000),
});

export const updateBlogInputSchema = z.object({
	title: z.string().min(1).max(100).optional(),
	content: z.string().min(1).max(10000).optional(),
	id: z.string(),
});

export type SignupInput = z.infer<typeof signupInputSchema>;
export type SigninInput = z.infer<typeof signinInputSchema>;
export type CreateBlogInput = z.infer<typeof createBlogInputSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogInputSchema>;
