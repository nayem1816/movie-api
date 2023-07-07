import { Schema, model } from "mongoose";
import { IReview, ReviewModel } from "./review.interface";

const ReviewSchema = new Schema<IReview, Record<string, unknown>>(
  {
    movie: {
      type: Schema.Types.ObjectId,
      ref: "Movies",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    ratingContent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Review = model<IReview, ReviewModel>("Reviews", ReviewSchema);
