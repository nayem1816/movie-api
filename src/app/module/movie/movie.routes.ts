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

router.get(
  "/:id",
  auth([ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER]),
  MovieController.getSingleMovie
);

router.get(
  "/",
  auth([ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER]),
  MovieController.getAllMovies
);

export const MovieRoutes = router;
