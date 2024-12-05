import express from "express";
import {
  signin,
  signup,
  resetPassword,
  resetPasswordRequest,
} from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/reset-password-req", resetPasswordRequest);
router.post("/reset-password", resetPassword);

export default router;
