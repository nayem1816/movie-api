import express from "express";
import { AuthRoutes } from "../module/auth/auth.routes";
import { MovieRoutes } from "../module/movie/movie.routes";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/movie",
    route: MovieRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
