import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "./constants";

axios.defaults.baseURL = API_BASE_URL;

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");

      // In cazul unei cereri cu succes, vom returna un promise cu date:
      return response.data;
    } catch (error) {
      // Daca cererea esueaza, returnam un promise care va fi respins si va contine textul erorii:
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
