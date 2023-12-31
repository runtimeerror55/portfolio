import styles from "./about.module.css";
import profile from "../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
export const About = ({ theme }) => {
      return (
            <>
                  <div
                        className={
                              styles["container-one"] +
                              " " +
                              styles["container-one-" + theme]
                        }
                  >
                        <div
                              className={
                                    styles["item-one"] + " " + styles["item"]
                              }
                        >
                              <img
                                    src={profile}
                                    alt="baymax"
                                    className={styles["profile"]}
                              ></img>
                              <a
                                    href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                                    className={styles["social-link"]}
                              >
                                    <FontAwesomeIcon
                                          icon={faGithub}
                                          size="lg"
                                    ></FontAwesomeIcon>
                                    github
                              </a>
                              <a
                                    href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                                    className={styles["social-link"]}
                              >
                                    <FontAwesomeIcon
                                          icon={faAt}
                                          size="lg"
                                    ></FontAwesomeIcon>
                                    gmail
                              </a>
                        </div>
                        <div className={styles["item"]}>
                              <h3
                                    className={
                                          styles["about-introduction"] +
                                          " " +
                                          styles["about-introduction-" + theme]
                                    }
                              >
                                    Hi, my name is aakash. I am a front end
                                    developer from india. I like keeping it
                                    simple and clean ,here's why i think you
                                    should hire me.
                              </h3>
                              <ul>
                                    <li
                                          className={
                                                styles[
                                                      "why-you-should-hire-me-li"
                                                ]
                                          }
                                    >
                                          developed high quality projects from
                                          different categrories in which two of
                                          them are MVP's.
                                    </li>
                                    <li
                                          className={
                                                styles[
                                                      "why-you-should-hire-me-li"
                                                ]
                                          }
                                    >
                                          spent apporximatesly 500+ hours on
                                          projects that are tracked (tracked
                                          using wakatime) and 2 of them are not
                                          tracked which i think would take
                                          another 100 hours more.
                                    </li>
                                    <li
                                          className={
                                                styles[
                                                      "why-you-should-hire-me-li"
                                                ]
                                          }
                                    >
                                          simple , clean ,elegant,fast,
                                          responsive,easy to use are some of the
                                          high priority things that i kept in
                                          mind while developing the projects. I
                                          am sure experinecing the projects will
                                          reflect those things.
                                    </li>
                                    <li
                                          className={
                                                styles[
                                                      "why-you-should-hire-me-li"
                                                ]
                                          }
                                    >
                                          developed two projects in vanilla js
                                          and also in react which are touch
                                          typing ,tetris.
                                    </li>
                                    <li
                                          className={
                                                styles[
                                                      "why-you-should-hire-me-li"
                                                ]
                                          }
                                    >
                                          ability to learn new things quickly
                                          and curious to learn any new stack in
                                          react ecosystem if required.
                                    </li>
                              </ul>
                        </div>
                  </div>
                  {/* <div className={styles["items"]}>
                        <div className={styles["item"]}>
                              <FontAwesomeIcon icon={faBolt}> </FontAwesomeIcon>
                        </div>
                        <div className={styles["item"]}>
                              <FontAwesomeIcon icon={faBolt}> </FontAwesomeIcon>
                        </div>
                        <div className={styles["item"]}>
                              <FontAwesomeIcon icon={faBolt}> </FontAwesomeIcon>
                        </div>
                  </div> */}
            </>
      );
};
