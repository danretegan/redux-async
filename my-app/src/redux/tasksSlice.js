import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";
// Importam operatia:
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,

  // Adaugam gestionarea actiunilor externe:
  extraReducers: {
    [fetchTasks.pending](state, action) {},
    [fetchTasks.fulfilled](state, action) {},
    [fetchTasks.rejected](state, action) {},
  },
});

export const tasksReducer = tasksSlice.reducer;
