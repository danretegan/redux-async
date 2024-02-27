import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";
// Importam operatia:
import { fetchTasks } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,

  // Adaugam gestionarea actiunilor externe:
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
