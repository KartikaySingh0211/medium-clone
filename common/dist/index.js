"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInputSchema = exports.createBlogInputSchema = exports.signinInputSchema = exports.signupInputSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInputSchema = zod_1.default.object({
    email: zod_1.default.email(),
    password: zod_1.default.string().min(6).max(100),
    name: zod_1.default.string().optional(),
});
exports.signinInputSchema = zod_1.default.object({
    email: zod_1.default.email(),
    password: zod_1.default.string().min(6).max(100),
});
exports.createBlogInputSchema = zod_1.default.object({
    title: zod_1.default.string().min(1).max(100),
    content: zod_1.default.string().min(1).max(10000),
});
exports.updateBlogInputSchema = zod_1.default.object({
    title: zod_1.default.string().min(1).max(100).optional(),
    content: zod_1.default.string().min(1).max(10000).optional(),
    id: zod_1.default.string(),
});
//# sourceMappingURL=index.js.map