import axios from "axios";

type GetTrainings = {
  data: {
    title: string;
    description: string;
  }[];
};

type Training = {
  title: string;
  description: string;
};

type PostTraining = {
  data: {
    title: string;
    description: string;
  };
};

export const getTrainings = async () => {
  const response: GetTrainings = await axios.get(
    "http://localhost:8080/trainings"
  );
  return response.data;
};

export const createTraining = async (data: Training) => {
  console.log(data);
  const response: PostTraining = await axios.post(
    "http://localhost:8080/trainings",
    data
  );
  return response;
};
