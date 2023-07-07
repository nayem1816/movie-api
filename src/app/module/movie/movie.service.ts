import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const addMovie = async (payload: IMovie): Promise<IMovie | null> => {
  const result = await Movie.create(payload);

  return result;
};

export const MovieService = {
  addMovie,
};
