import { Model, Types } from "mongoose";
import { IMovie } from "../movie/movie.interface";
import { IUser } from "../user/user.interface";

export type IReview = {
  movie: Types.ObjectId | IMovie;
  user: Types.ObjectId | IUser;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingContent: string;
};

export type ReviewModel = Model<IReview, Record<string, unknown>>;
