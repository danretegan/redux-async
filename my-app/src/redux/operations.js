import axios from "axios";
import {
  fetchingError,
  fetchingSuccess,
  fetchinhInProgress,
} from "./tasksSlice";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = () => async (dispatch) => {
  try {
    // Indicator de loading:
    dispatch(fetchinhInProgress());

    // HTTP get:
    const response = await axios.get("/tasks");

    // Procesarea datelor:
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    // Procesarea erorilor:
    dispatch(fetchingError(error.message));
  }
};
