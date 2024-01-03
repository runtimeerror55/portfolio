import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { ProjectPage } from "./pages/projectPage/projectPage";
import { homePageLoader, ProjectPageLoader } from "./loaders/loaders";
import { ThemeProvider } from "./context/theme";
const router = createBrowserRouter([
      {
            path: "/",
            element: <HomePage></HomePage>,
            loader: homePageLoader,
      },
      {
            path: "/projects/:id",
            element: <ProjectPage></ProjectPage>,
            loader: ProjectPageLoader,
      },
]);

function App() {
      return (
            <ThemeProvider>
                  <RouterProvider router={router} />
            </ThemeProvider>
      );
}

export default App;
