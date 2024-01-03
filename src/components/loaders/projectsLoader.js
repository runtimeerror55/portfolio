import { Facebook } from "react-content-loader";
import styles from "./projectsLoader.module.css";
export const ProjectsLoader = ({ theme, color, numberOfLoaders }) => {
      return (
            <>
                  <div className={styles["projects"]}>
                        {new Array(numberOfLoaders).fill(1).map(() => {
                              return (
                                    <div
                                          className={
                                                styles["project"] +
                                                " " +
                                                styles["project-" + theme]
                                          }
                                    >
                                          <Facebook
                                                style={{
                                                      height: "120px",
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
