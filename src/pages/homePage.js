import { Suspense, useContext } from "react";
import { Await, useLoaderData } from "react-router";
import styles from "./homePage.module.css";
import baymax from "../assets/images/baymax.jpeg";
import profile from "../assets/images/profile.jpg";
import { Projects } from "./Projects";
import { ColorRing } from "react-loader-spinner";
import { colorRingOptions } from "../utilities/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { themeContext } from "../context/theme";
import { Blogs } from "./blogs";
import { About } from "./about";
import { ProjectsLoader } from "../components/loaders/projectsLoader";
export const HomePage = () => {
      const { loaderData } = useLoaderData();
      const { theme, themeChangeHandler } = useContext(themeContext);

      return (
            <div className={styles["page"] + " " + styles["page-" + theme]}>
                  <div
                        className={
                              styles["banner"] + " " + styles["banner-" + theme]
                        }
                  >
                        <div>
                              <img
                                    src="https://res.cloudinary.com/diwrxz82u/image/upload/q_auto,f_auto/v1706687634/portfolio/profile_peqnmn.jpg"
                                    className={styles["profile"]}
                                    alt="user"
                              ></img>
                        </div>

                        <FontAwesomeIcon
                              icon={faLightbulb}
                              className={styles["bulb"]}
                              onClick={themeChangeHandler}
                        />
                  </div>
                  <main className={styles["main"]}>
                        <section className={styles["projects-section"]}>
                              <h2
                                    className={
                                          styles["projects-heading"] +
                                          " " +
                                          styles["projects-heading-" + theme]
                                    }
                              >
                                    Projects
                              </h2>

                              <Suspense
                                    fallback={
                                          <ProjectsLoader
                                                theme={theme}
                                                color="teal"
                                                numberOfLoaders={6}
                                                projectsAttributes={{
                                                      className:
                                                            styles["projects"],
                                                }}
                                                projectAttributes={{
                                                      className:
                                                            styles["project"],
                                                }}
                                          ></ProjectsLoader>
                                    }
                              >
                                    <Await resolve={loaderData}>
                                          <Projects></Projects>
                                    </Await>
                              </Suspense>
                        </section>
                        <section className={styles["blogs-section"]}>
                              <h2
                                    className={
                                          styles["blogs-heading"] +
                                          " " +
                                          styles["blogs-heading-" + theme]
                                    }
                              >
                                    Blogs
                              </h2>

                              <Suspense
                                    fallback={
                                          <ProjectsLoader
                                                theme={theme}
                                                color="crimson"
                                                numberOfLoaders={4}
                                                projectAttributes={{
                                                      className: styles["blog"],
                                                }}
                                          ></ProjectsLoader>
                                    }
                              >
                                    <Await resolve={loaderData}>
                                          <Blogs></Blogs>
                                    </Await>
                              </Suspense>
                        </section>
                        <section className={styles["about-section"]}>
                              <h2
                                    className={
                                          styles["about-heading"] +
                                          " " +
                                          styles["about-heading-" + theme]
                                    }
                              >
                                    About
                              </h2>
                              <About theme={theme}></About>
                        </section>
                  </main>
            </div>
      );
};

// project backgroundcolor: #deecf7
// banner backgroundcolor: darkcyan
// color: black
// blog icon color : crimson
// banner background-color: is same as project background which is light blue in color
