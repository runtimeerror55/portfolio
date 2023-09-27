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
                                    src={profile}
                                    alt="baymax"
                                    className={styles["profile"]}
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
                                          <div className={styles["loader"]}>
                                                <ColorRing
                                                      {...colorRingOptions}
                                                ></ColorRing>
                                          </div>
                                    }
                              >
                                    <Await resolve={loaderData}>
                                          <Projects></Projects>
                                    </Await>
                              </Suspense>
                        </section>
                  </main>
            </div>
      );
};

// project backgroundcolor: #deecf7
// banner backgroundcolor: darkcyan
// color: black
