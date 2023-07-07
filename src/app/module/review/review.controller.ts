import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IReview } from "./review.interface";
import { ReviewService } from "./review.service";
import { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";

const addReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.user as JwtPayload;

    const result = await ReviewService.addReview(
      req.body,
      _id as Types.ObjectId
    );

    sendResponse<IReview>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ReviewService.getAllReviews();

    sendResponse<IReview[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Movies retrieved successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ReviewController = {
  addReview,
  getAllReviews,
};
