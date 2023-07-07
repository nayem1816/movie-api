import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IMovie } from "./movie.interface";
import { MovieService } from "./movie.service";

const addMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await MovieService.addMovie(req.body);

    sendResponse<IMovie>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Movie added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await MovieService.getAllMovies();

    sendResponse<IMovie[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Movies retrieved successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const result = await MovieService.getSingleMovie(id);

    sendResponse<IMovie>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Movie retrieved successfully.",
      data: result[0],
    });
  } catch (error) {
    next(error);
  }
};

export const MovieController = {
  addMovie,
  getAllMovies,
  getSingleMovie,
};
