import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

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
