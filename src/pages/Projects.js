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
import { Facebook } from "react-content-loader";

const icons = {
      faGamepad,
      faCartShopping,
      faVideo,
      faKeyboard,
      faUser,
      faArrowRight,
      faGreaterThan,
};

const projectsData = [
      {
            title: "Tetris (version 2.0)",
            keyFunctionalities: [
                  "simple,clean ,elegant experience",
                  "move current tetromino down ,right,left",
                  "destroying blocks",
                  "shifting blocks",
                  "continously dropping the current tetromino of each player",
                  "update score",
                  "generate random tetrominos for every new game",
                  "single player",
                  "couch play(2 players in one screen side by side)",
                  "only controller supporrt, only keyboard support, keyboard and controller mix support",
                  "whole app navigation support with controller",
                  "customize keybindings for controller and keyboard",
                  "multiple players on single keyboard support",
                  "sounds for button presses,game sounds",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg",
            introduction: `A web-based Tetris game!
          Immerse yourself in the classic world of
         falling blocks and strategy as you challenge
         your skills and aim for high scores. Get
         ready to experience Tetris like never
         before, right in your web browser`,
            icon: "faGamepad",
      },
      {
            title: "Tetris (version 1.0)",
            keyFunctionalities: [
                  "move down",
                  "move right",
                  "move left",
                  "generate board nodes matrix",
                  "destroying blocks",
                  "ui renderer",
                  "shifting blocks",
                  "updating player binary matrix",
                  "isPossibletoMove",
                  "update score",
                  "update currentTetromino",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "ejs",
                  "express",
                  "express-session",
                  "passport",
                  "passport-local",
                  "passport-local-mongoose",
                  "mongoose",
                  "express",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/f760a057-5695-47ae-8b0e-0d5b90ece452.svg",
            introduction: `A web-based Tetris game!
           Immerse yourself in the classic world of
          falling blocks and strategy as you challenge
          your skills and aim for high scores. Get
          ready to experience Tetris like never
          before, right in your web browser`,
            icon: "faGamepad",
      },
      {
            title: "Touch typing (version 2.0)",
            keyFunctionalities: [
                  "typing test",
                  "reloading new paragraph any time (during the test, before the test , after the test)",
                  "restarting the test any time (during the test, before the test , after the test)",
                  "calculating wpm,accuracy of the test",
                  "save all the stats of that particular test",
                  "calculating all time stats ( avg wpm, avg accuracy, each letter avg accuracy) and showing them in stats page",
                  "calculating stats for last 10 tests (avg wpm ,avg accuracy)and showing them in stats page",
                  "showing timer during the test",
                  "sounds while typing",
                  "change different themes, timers , sounds in the settings and save them",
                  "loading state for all the functionalities",
                  "error handling for all the functionalities (frontend and backEnd)",
                  "notifications for all the functionalities(success and error)",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/27c10295-5e0f-4136-9d29-665ab1e01f95.svg",
            introduction:
                  "A web based touch typing. Experience simple,elegant,fast, clean touch typing and improve your typing skills",
            icon: "faKeyboard",
      },
      {
            title: "Touch typing (version 1.0)",
            keyFunctionalities: [],
            toolAndLanguages: [],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg",
            icon: "faKeyboard",
      },
      {
            title: "Ecommerce",
            keyFunctionalities: [
                  "add product to cart",
                  "delete product from cart",
                  "add address",
                  "edit address",
                  "delete address",
                  "place an order",
                  "filter products",
                  "searching products using the title",
                  "loading state for all the functionalities",
                  "error handling for all the functionalities (frontend and backEnd)",
                  "notifications for all the functionalities",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/bf0594f3-b4ea-4c85-9dff-9040dde8d7f8.svg",
            introduction:
                  "A web based electronics shopping app. Experience shopping like never before. Shop for your favourite mobiles,laptops etc",
            icon: "faCartShopping",
      },
      {
            title: "Video library",
            keyFunctionalities: [
                  "add video to watch later",
                  "delete video from watch later",
                  "create play list",
                  "add video to a particular play list",
                  "delete video from a particular play list",
                  "filtering products using predefined tags",
                  "loading state for all the functionalities",
                  "error handling for all the functionalities (frontend and backEnd)",
                  "notifications for all the functionalities",
                  "authentication",
            ],
            toolAndLanguages: [
                  "html",
                  "javscript",
                  "css",
                  "react",
                  "express",
                  "mongoose",
                  "bcrypt",
                  "jsonwebtoken",
                  "react-jwt",
                  "react-loader-spinner",
                  "react-router-dom",
                  "react-toastify",
            ],
            versions: [],
            timeSpentLink:
                  "https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/0d9368d3-45bf-46a4-97a2-0995cbea2eca.svg",
            introduction:
                  "A web based tech reviews app. Find all the tech related reviews all in one place.",
            icon: "faVideo",
      },
];

export const Projects = () => {
      const loaderData = useAsyncValue()[0];
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
                                          aria-label="project link"
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
