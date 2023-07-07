import { IReview } from "./review.interface";
import { Review } from "./review.model";
import { Types } from "mongoose";

const addReview = async (
  payload: IReview,
  _id: Types.ObjectId
): Promise<IReview | null> => {
  payload.user = _id as Types.ObjectId;

  const result = await Review.create(payload);

  return result;
};

export const ReviewService = {
  addReview,
};
