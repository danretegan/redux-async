import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "./redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        {isLoading && <b>Loading tasks...</b>}
        {error && <b>{error}</b>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div>
    </>
  );
};
