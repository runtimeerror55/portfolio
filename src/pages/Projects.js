import { Link, useAsyncValue } from "react-router-dom";
import styles from "./projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext } from "../context/theme";
import {
      faGamepad,
      faCartShopping,
      faVideo,
      faKeyboard,
      faUser,
      faArrowRight,
      faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

const icons = {
      faGamepad,
      faCartShopping,
      faVideo,
      faKeyboard,
      faUser,
      faArrowRight,
      faGreaterThan,
};

export const Projects = () => {
      const loaderData = useAsyncValue();
      const { theme } = useContext(themeContext);
      console.log(loaderData);
      return (
            <div className={styles["projects"]}>
                  {loaderData.payload.map((project) => {
                        return (
                              <div
                                    className={
                                          styles["project"] +
                                          " " +
                                          styles["project-" + theme]
                                    }
                              >
                                    <div
                                          className={
                                                styles["project-icon-container"]
                                          }
                                    >
                                          <FontAwesomeIcon
                                                icon={icons[project.icon]}
                                          />
                                    </div>

                                    <div
                                          className={
                                                styles["project-information"]
                                          }
                                    >
                                          <div
                                                className={
                                                      styles["project-name"] +
                                                      " " +
                                                      styles[
                                                            "project-name-" +
                                                                  theme
                                                      ]
                                                }
                                          >
                                                {project.title}
                                          </div>
                                          <div className={styles["tech-stack"]}>
                                                <div className={styles["tool"]}>
                                                      Html,
                                                </div>
                                                <div className={styles["tool"]}>
                                                      javascript
                                                </div>
                                                <div className={styles["tool"]}>
                                                      Css
                                                </div>
                                                <div className={styles["tool"]}>
                                                      Express
                                                </div>
                                                <div className={styles["tool"]}>
                                                      Mongoose
                                                </div>
                                                <div className={styles["tool"]}>
                                                      React
                                                </div>
                                          </div>
                                          <img
                                                className={
                                                      styles["time-spent-image"]
                                                }
                                                src={project.timeSpentLink}
                                                alt="waka time"
                                          ></img>
                                    </div>
                                    <Link
                                          to={`/projects/${project._id}`}
                                          className={
                                                styles["project-link"] +
                                                " " +
                                                styles["project-link-" + theme]
                                          }
                                    >
                                          <FontAwesomeIcon
                                                icon={faGreaterThan}
                                          />
                                    </Link>
                              </div>
                        );
                  })}
            </div>
      );
};

// <div className={styles["project"]}>
// <div className={styles["project-icon-container"]}>
//       <FontAwesomeIcon icon={faGamepad} />
// </div>

// <div className={styles["project-information"]}>
//       <div className={styles["project-name"]}>
//             Tetris (version 1.0)
//       </div>
//       <div className={styles["tech-stack"]}>
//             <div className={styles["tool"]}>
//                   Html,
//             </div>
//             <div className={styles["tool"]}>
//                   javascript
//             </div>
//             <div className={styles["tool"]}>
//                   Css
//             </div>
//             <div className={styles["tool"]}>
//                   Express
//             </div>
//             <div className={styles["tool"]}>
//                   Mongoose
//             </div>
//             <div className={styles["tool"]}>
//                   Ejs
//             </div>
//       </div>
//       <img
//             className={styles["time-spent-image"]}
//             src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
//       ></img>
// </div>
// <Link className={styles["project-link"]}>
//       <FontAwesomeIcon icon={faGreaterThan} />
// </Link>
// </div>
// <div className={styles["project"]}>
// <div className={styles["project-icon-container"]}>
//       <FontAwesomeIcon icon={faCartShopping} />
// </div>

// <div className={styles["project-information"]}>
//       <div className={styles["project-name"]}>
//             Ecommerce
//       </div>
//       <div className={styles["tech-stack"]}>
//             <div className={styles["tool"]}>
//                   Html,
//             </div>
//             <div className={styles["tool"]}>
//                   javascript
//             </div>
//             <div className={styles["tool"]}>
//                   Css
//             </div>
//             <div className={styles["tool"]}>
//                   Express
//             </div>
//             <div className={styles["tool"]}>
//                   Mongoose
//             </div>
//             <div className={styles["tool"]}>
//                   React
//             </div>
//       </div>
//       <img
//             className={styles["time-spent-image"]}
//             src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
//       ></img>
// </div>
// <Link className={styles["project-link"]}>
//       <FontAwesomeIcon icon={faGreaterThan} />
// </Link>
// </div>
// <div className={styles["project"]}>
// <div className={styles["project-icon-container"]}>
//       <FontAwesomeIcon icon={faVideo} />
// </div>

// <div className={styles["project-information"]}>
//       <div className={styles["project-name"]}>
//             Techtotube
//       </div>
//       <div className={styles["tech-stack"]}>
//             <div className={styles["tool"]}>
//                   Html,
//             </div>
//             <div className={styles["tool"]}>
//                   javascript
//             </div>
//             <div className={styles["tool"]}>
//                   Css
//             </div>
//             <div className={styles["tool"]}>
//                   Express
//             </div>
//             <div className={styles["tool"]}>
//                   Mongoose
//             </div>
//             <div className={styles["tool"]}>
//                   React
//             </div>
//       </div>
//       <img
//             className={styles["time-spent-image"]}
//             src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
//       ></img>
// </div>
// <Link className={styles["project-link"]}>
//       <FontAwesomeIcon icon={faGreaterThan} />
// </Link>
// </div>
// <div className={styles["project"]}>
// <div className={styles["project-icon-container"]}>
//       <FontAwesomeIcon icon={faKeyboard} />
// </div>

// <div className={styles["project-information"]}>
//       <div className={styles["project-name"]}>
//             Typingo (version 2.0)
//       </div>
//       <div className={styles["tech-stack"]}>
//             <div className={styles["tool"]}>
//                   Html,
//             </div>
//             <div className={styles["tool"]}>
//                   javascript
//             </div>
//             <div className={styles["tool"]}>
//                   Css
//             </div>
//             <div className={styles["tool"]}>
//                   Express
//             </div>
//             <div className={styles["tool"]}>
//                   Mongoose
//             </div>
//             <div className={styles["tool"]}>
//                   React
//             </div>
//       </div>
//       <img
//             className={styles["time-spent-image"]}
//             src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
//       ></img>
// </div>
// <Link className={styles["project-link"]}>
//       <FontAwesomeIcon icon={faGreaterThan} />
// </Link>
// </div>
// <div className={styles["project"]}>
// <div className={styles["project-icon-container"]}>
//       <FontAwesomeIcon icon={faKeyboard} />
// </div>

// <div className={styles["project-information"]}>
//       <div className={styles["project-name"]}>
//             Typingo (version 1.0)
//       </div>
//       <div className={styles["tech-stack"]}>
//             <div className={styles["tool"]}>
//                   Html,
//             </div>
//             <div className={styles["tool"]}>
//                   javascript
//             </div>
//             <div className={styles["tool"]}>
//                   Css
//             </div>
//             <div className={styles["tool"]}>
//                   Express
//             </div>
//             <div className={styles["tool"]}>
//                   Mongoose
//             </div>
//             <div className={styles["tool"]}>
//                   Ejs
//             </div>
//       </div>
//       <img
//             className={styles["time-spent-image"]}
//             src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
//       ></img>
// </div>
// <Link className={styles["project-link"]}>
//       <FontAwesomeIcon icon={faGreaterThan} />
// </Link>
// </div>
