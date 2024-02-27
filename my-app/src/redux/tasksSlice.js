import { initialState } from "./initialState";

const tasksSlice = {
  name: "tasks",
  initialStale: initialState,
  reducers: {
    // Este exectuat la inceputul unei solicitari HTTP:
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    // Va fi executat daca solicitarea HTTP  a avut succes:
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    // Va fi executat dac solicitarea HTTP s-a incheiat cu eroare:
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
};

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
