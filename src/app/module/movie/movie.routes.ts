import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/userRole";
import { MovieController } from "./movie.controller";

const router = express.Router();

router.post(
  "/add-movie",
  auth([ENUM_USER_ROLE.ADMIN]),
  MovieController.addMovie
);

export const MovieRoutes = router;
