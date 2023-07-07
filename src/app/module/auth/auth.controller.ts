import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "../user/user.interface";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";

const signupUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.signupUser(req.body);

    const { password, ...othersData } = JSON.parse(JSON.stringify(result));

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully",
      data: othersData,
    });
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  signupUser,
};
