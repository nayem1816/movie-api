import { Schema, model } from "mongoose";
import { IUser, IUserModel, UserModel } from "./user.interface";
import { role } from "./user.constant";
import config from "../../../config";
import bcrypt from "bcrypt";

const UserSchema = new Schema<IUser, Record<string, unknown>, IUserModel>(
  {
    role: {
      type: String,
      required: true,
      enum: role,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.isPasswordMatch = async function (
  givenPassword: string,
  hashPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(givenPassword, hashPassword);

  return isMatch;
};

UserSchema.pre("save", async function (next) {
  const hashPassword = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  this.password = hashPassword;

  next();
});

export const User = model<IUser, UserModel>("Users", UserSchema);
