import { NextFunction, Request, Response } from "express";
import { jwtHelper } from "../../helpers/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";

const auth = (rules: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("Token not found");
      }

      const verifyUser = jwtHelper.verifyToken(
        token as string,
        config.jwt.jwt_access_token_secret_key as Secret
      );

      if (!verifyUser) {
        throw new Error("Invalid token");
      }

      req.user = verifyUser;

      if (rules.length && !rules.includes(verifyUser.role)) {
        throw new Error("Unauthorized");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
