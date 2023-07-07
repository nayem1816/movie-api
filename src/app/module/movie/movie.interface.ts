import { Model, Types } from "mongoose";
import { IDirector } from "../director/director.interface";

export type IMovie = {
  title: string;
  runtime: number;
  actors: string[];
  director: Types.ObjectId | IDirector;
  producer: string;
  release_date: string;
  poster_image: string;
};

export type MovieModel = Model<IMovie, Record<string, unknown>>;
