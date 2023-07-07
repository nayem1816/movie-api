import config from "../../../config";
import { jwtHelper } from "../../../helpers/jwtHelper";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { ILoginUserResponse } from "./auth.interface";
import { Secret } from "jsonwebtoken";

const signupUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);

  return result;
};

const loginUser = async (payload: IUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;
  const user = new User();

  const isUserExist = await User.findOne(
    { email },
    { _id: 1, password: 1, role: 1, email: 1 }
  );

  if (!isUserExist) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await user.isPasswordMatch(
    password,
    isUserExist.password
  );

  if (!isPasswordMatch) {
    throw new Error("Password not match");
  }

  const { _id, password: userPassword, role } = isUserExist;

  // create access Token
  const accessToken = jwtHelper.createToken(
    { _id, userPassword, role },
    config.jwt.jwt_access_token_secret_key as Secret,
    config.jwt.jwt_access_token_expire_in as string
  );

  // refresh token
  const refreshToken = jwtHelper.createToken(
    { _id, userPassword, role },
    config.jwt.jwt_refresh_token_secret_key as Secret,
    config.jwt.jwt_refresh_token_expire_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  signupUser,
  loginUser,
};
