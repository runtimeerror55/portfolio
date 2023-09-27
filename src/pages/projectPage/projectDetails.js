import { useAsyncValue } from "react-router";
import { useContext } from "react";
import styles from "./projectDetails.module.css";
import { themeContext } from "../../context/theme";
export const ProjectDetails = () => {
      const loaderData = useAsyncValue();
      const { theme } = useContext(themeContext);

      return (
            <section className={styles["project-section"]}>
                  <h2
                        className={
                              styles["project-name"] +
                              " " +
                              styles["project-name-" + theme]
                        }
                  >
                        {loaderData.payload.title}
                  </h2>
                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Introduction
                  </h3>
                  <p
                        className={
                              styles["introduction"] +
                              " " +
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        {loaderData.payload.introduction}
                  </p>
                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Key functionalities:
                  </h3>
                  <ul
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        {loaderData.payload.keyFunctionalities.map(
                              (keyFunctionality) => {
                                    return <li>{keyFunctionality}</li>;
                              }
                        )}
                  </ul>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Lannguages and tools used:
                  </h3>
                  <ul
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        {loaderData.payload.toolAndLanguages.map((tool) => {
                              return <li>{tool}</li>;
                        })}
                  </ul>
            </section>
      );
};
