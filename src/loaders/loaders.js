import { defer } from "react-router";
const hostedBackendUrl = "https://portfolio-backend-red.vercel.app";
const localBackEndUrl = "http://localhost:8080";

export const getProjects = async () => {
      try {
            const response = await fetch(`${hostedBackendUrl}/projects`);
            console.log(response);
            const data = response.json();
            return data;
      } catch (error) {
            return { status: "error", message: error.message };
      }
};

export const getBlogs = async () => {
      try {
            const response = await fetch(`${hostedBackendUrl}/blogs`);
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
                  `${hostedBackendUrl}/projects/${params.id}`
            );

            const data = await response.json();
            return data;
      } catch (error) {
            return { status: "error", message: error.message };
      }
};
export const homePageLoader = () => {
      return defer({
            loaderData: Promise.all([getProjects(), getBlogs()]),
      });
};

export const ProjectPageLoader = ({ request, params }) => {
      return defer({
            loaderData: getProject(request, params),
      });
};
