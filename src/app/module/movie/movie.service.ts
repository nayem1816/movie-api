import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const addMovie = async (payload: IMovie): Promise<IMovie | null> => {
  const result = await Movie.create(payload);

  return result;
};

const getAllMovies = async (): Promise<IMovie[]> => {
  const result = await Movie.find({});

  return result;
};

const getSingleMovie = async (id: string) => {
  const result = await Movie.find({ _id: id });

  return result;
};

export const MovieService = {
  addMovie,
  getAllMovies,
  getSingleMovie,
};
