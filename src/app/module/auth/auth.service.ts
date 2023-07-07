import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signupUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);

  return result;
};

export const AuthService = {
  signupUser,
};
