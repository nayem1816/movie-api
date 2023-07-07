import { Model } from "mongoose";

export type IDirector = {
  name: string;
  designation: string;
};

export type DirectorModel = Model<IDirector, Record<string, unknown>>;
