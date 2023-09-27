import { defer } from "react-router";

export const getProjects = async () => {
      try {
            const response = await fetch("http://localhost:8080/projects");
            console.log(response);
            const data = response.json();
            return data;
      } catch (error) {
            return { status: "error", message: error.message };
      }
};

export const getProject = async (request, params) => {
      try {
            const response = await fetch(
                  `http://localhost:8080/projects/${params.id}`
            );

            const data = await response.json();
            return data;
      } catch (error) {
            return { status: "error", message: error.message };
      }
};
export const homePageLoader = () => {
      return defer({
            loaderData: getProjects(),
      });
};

export const ProjectPageLoader = ({ request, params }) => {
      return defer({
            loaderData: getProject(request, params),
      });
};
