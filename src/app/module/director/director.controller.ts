import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IDirector } from "./director.interface";
import { DirectorService } from "./director.service";

const addDirector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await DirectorService.addDirector(req.body);

    sendResponse<IDirector>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Director added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllDirectors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DirectorService.getAllDirectors();

    sendResponse<IDirector[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Movies retrieved successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const DirectorController = {
  addDirector,
  getAllDirectors,
};
