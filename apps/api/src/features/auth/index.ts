import { Router } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";

const authRouter: Router = Router();

// Handle all auth routes
authRouter.all("*", (req, res) => {
    return toNodeHandler(auth.handler)(req, res);
});

export default authRouter;
