import styles from "./projects.module.css";
import ecommerce from "../assets/images/Screenshot 2023-09-24 141834.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
      faGamepad,
      faCartShopping,
      faVideo,
      faKeyboard,
      faUser,
      faGithub,
      faArrowRight,
      faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Projects = () => {
      return (
            <section className={styles["projects-section"]}>
                  <h2 className={styles["projects-heading"]}>Projects</h2>
                  <div className={styles["projects"]}>
                        <div className={styles["project"]}>
                              <div className={styles["project-icon-container"]}>
                                    <FontAwesomeIcon icon={faGamepad} />
                              </div>

                              <div className={styles["project-information"]}>
                                    <div className={styles["project-name"]}>
                                          Tetris (version 2.0)
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
                                          className={styles["time-spent-image"]}
                                          src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
                                    ></img>
                              </div>
                              <Link className={styles["project-link"]}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                              </Link>
                        </div>
                        <div className={styles["project"]}>
                              <div className={styles["project-icon-container"]}>
                                    <FontAwesomeIcon icon={faGamepad} />
                              </div>

                              <div className={styles["project-information"]}>
                                    <div className={styles["project-name"]}>
                                          Tetris (version 1.0)
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
                                                Ejs
                                          </div>
                                    </div>
                                    <img
                                          className={styles["time-spent-image"]}
                                          src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
                                    ></img>
                              </div>
                              <Link className={styles["project-link"]}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                              </Link>
                        </div>
                        <div className={styles["project"]}>
                              <div className={styles["project-icon-container"]}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                              </div>

                              <div className={styles["project-information"]}>
                                    <div className={styles["project-name"]}>
                                          Ecommerce
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
                                          className={styles["time-spent-image"]}
                                          src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
                                    ></img>
                              </div>
                              <Link className={styles["project-link"]}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                              </Link>
                        </div>
                        <div className={styles["project"]}>
                              <div className={styles["project-icon-container"]}>
                                    <FontAwesomeIcon icon={faVideo} />
                              </div>

                              <div className={styles["project-information"]}>
                                    <div className={styles["project-name"]}>
                                          Techtotube
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
                                          className={styles["time-spent-image"]}
                                          src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
                                    ></img>
                              </div>
                              <Link className={styles["project-link"]}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                              </Link>
                        </div>
                        <div className={styles["project"]}>
                              <div className={styles["project-icon-container"]}>
                                    <FontAwesomeIcon icon={faKeyboard} />
                              </div>

                              <div className={styles["project-information"]}>
                                    <div className={styles["project-name"]}>
                                          Typingo (version 2.0)
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
                                          className={styles["time-spent-image"]}
                                          src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
                                    ></img>
                              </div>
                              <Link className={styles["project-link"]}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                              </Link>
                        </div>
                        <div className={styles["project"]}>
                              <div className={styles["project-icon-container"]}>
                                    <FontAwesomeIcon icon={faKeyboard} />
                              </div>

                              <div className={styles["project-information"]}>
                                    <div className={styles["project-name"]}>
                                          Typingo (version 1.0)
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
                                                Ejs
                                          </div>
                                    </div>
                                    <img
                                          className={styles["time-spent-image"]}
                                          src="https://wakatime.com/badge/user/4508671f-c39e-4efe-b93e-586266f777da/project/b44acfdd-6382-4cfb-a219-5510400f2056.svg"
                                    ></img>
                              </div>
                              <Link className={styles["project-link"]}>
                                    <FontAwesomeIcon icon={faGreaterThan} />
                              </Link>
                        </div>
                  </div>
            </section>
      );
};
