import express from "express";
import authRoutes from "./auth.route.js";
import ConversationRoutes from "./conversation.route.js";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/conversation", ConversationRoutes);
export default router;
