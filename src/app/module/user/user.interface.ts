import { Model } from "mongoose";

type Role = "admin" | "user";

export type IUser = {
  role: Role;
  name: string;
  email: string;
  password: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
