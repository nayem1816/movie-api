import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/userRole";
import { DirectorController } from "./director.controller";

const router = express.Router();

router.post(
  "/add-director",
  auth([ENUM_USER_ROLE.ADMIN]),
  DirectorController.addDirector
);

router.get(
  "/",
  auth([ENUM_USER_ROLE.ADMIN]),
  DirectorController.getAllDirectors
);

export const DirectorRoutes = router;
