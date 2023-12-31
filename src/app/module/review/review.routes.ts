import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/userRole";
import { ReviewController } from "./review.controller";

const router = express.Router();

router.post(
  "/add-review",
  auth([ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER]),
  ReviewController.addReview
);

router.get(
  "/",
  auth([ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER]),
  ReviewController.getAllReviews
);
export const ReviewRoutes = router;
