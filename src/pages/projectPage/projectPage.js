import { Suspense, useContext } from "react";
import { Await, useLoaderData } from "react-router";
import styles from "./projectPage.module.css";

import profile from "../../assets/images/profile.jpg";
import { ColorRing } from "react-loader-spinner";
import { colorRingOptions } from "../../utilities/utilities";
import { ProjectDetails } from "./projectDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { themeContext } from "../../context/theme";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export const ProjectPage = () => {
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
                                    <ProjectDetails
                                          theme={theme}
                                    ></ProjectDetails>
                              </Await>
                        </Suspense>
                  </main>
            </div>
      );
};
