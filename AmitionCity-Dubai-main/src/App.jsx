import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { route } from "./routes/router";

const App = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
