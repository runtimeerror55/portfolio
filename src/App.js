import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { ProjectPage } from "./pages/projectPage/projectPage";
const router = createBrowserRouter([
      {
            path: "/",
            element: <HomePage></HomePage>,
      },
      {
            path: "/projects/:id",
            element: <ProjectPage></ProjectPage>,
      },
]);

function App() {
      return <RouterProvider router={router} />;
}

export default App;
