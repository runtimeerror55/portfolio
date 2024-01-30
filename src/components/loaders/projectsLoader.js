import { Facebook } from "react-content-loader";
import styles from "./projectsLoader.module.css";
export const ProjectsLoader = ({
      theme,
      color,
      numberOfLoaders,
      height,
      projectsAttributes = {},
      projectAttributes = {},
}) => {
      return (
            <>
                  <div
                        {...projectsAttributes}
                        className={
                              styles["projects"] +
                              " " +
                              projectsAttributes?.className
                        }
                  >
                        {new Array(numberOfLoaders).fill(1).map(() => {
                              return (
                                    <div
                                          {...projectAttributes}
                                          className={
                                                styles["project"] +
                                                " " +
                                                styles["project-" + theme] +
                                                " " +
                                                projectAttributes?.className
                                          }
                                          //   style={{ height }}
                                    >
                                          <Facebook
                                                style={{
                                                      height: "100%",
                                                }}
                                                backgroundColor={color}
                                          ></Facebook>
                                    </div>
                              );
                        })}
                  </div>
            </>
      );
};
