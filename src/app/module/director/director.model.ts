import { Schema, model } from "mongoose";
import { DirectorModel, IDirector } from "./director.interface";

const DirectorSchema = new Schema<IDirector, Record<string, unknown>>(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Director = model<IDirector, DirectorModel>(
  "Director",
  DirectorSchema
);
