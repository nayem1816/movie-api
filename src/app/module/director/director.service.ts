import { IDirector } from "./director.interface";
import { Director } from "./director.model";

const addDirector = async (payload: IDirector): Promise<IDirector | null> => {
  const result = await Director.create(payload);

  return result;
};

const getAllDirectors = async (): Promise<IDirector[]> => {
  const result = await Director.find({});

  return result;
};

export const DirectorService = {
  addDirector,
  getAllDirectors,
};
