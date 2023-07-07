import { Model } from "mongoose";

export type IMovie = {
  title: string;
  runtime: number;
  actors: string[];
  director: string;
  producer: string;
  release_date: string;
  poster_image: string;
};

export type MovieModel = Model<IMovie, Record<string, unknown>>;
