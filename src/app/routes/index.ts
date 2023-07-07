import express from "express";
import { AuthRoutes } from "../module/auth/auth.routes";
import { MovieRoutes } from "../module/movie/movie.routes";
import { DirectorRoutes } from "../module/director/director.routes";
import { ReviewRoutes } from "../module/review/review.routes";

const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/movies",
    route: MovieRoutes,
  },
  {
    path: "/directors",
    route: DirectorRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
