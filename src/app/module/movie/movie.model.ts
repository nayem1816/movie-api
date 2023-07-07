import { Schema, model } from "mongoose";
import { IMovie, MovieModel } from "./movie.interface";

const MovieSchema = new Schema<IMovie, Record<string, unknown>>(
  {
    title: {
      type: String,
      required: true,
    },
    runtime: {
      type: Number,
      required: true,
    },
    actors: {
      type: [String],
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
    release_date: {
      type: String,
      required: true,
    },
    poster_image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Movie = model<IMovie, MovieModel>("Movies", MovieSchema);
