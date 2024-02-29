import { Link, useAsyncValue } from "react-router-dom";
import styles from "./blogs.module.css";
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
export const Blogs = () => {
      const loaderData = useAsyncValue()[1];
      const { theme } = useContext(themeContext);
      console.log(loaderData);
      //   loaderData.payload = [
      //         { title: "javascript arrays" },
      //         { title: "how js works behind the scenes" },
      //         { title: "javascript objects" },
      //         { title: "javascript functions" },
      //   ];
      return (
            <div className={styles["blogs"]}>
                  {loaderData.payload.map((blog) => {
                        return (
                              <div
                                    className={
                                          styles["blog"] +
                                          " " +
                                          styles["blog-" + theme]
                                    }
                              >
                                    <div
                                          className={
                                                styles["blog-icon-container"]
                                          }
                                    >
                                          <FontAwesomeIcon icon={faGamepad} />
                                    </div>

                                    <div className={styles["blog-information"]}>
                                          <div
                                                className={
                                                      styles["blog-name"] +
                                                      " " +
                                                      styles[
                                                            "blog-name-" + theme
                                                      ]
                                                }
                                          >
                                                {blog.title}
                                          </div>
                                          <p
                                                className={
                                                      styles[
                                                            "blog-introduction"
                                                      ]
                                                }
                                          >
                                                {blog.description
                                                      .split(" ")
                                                      .filter((word, index) => {
                                                            if (index < 20) {
                                                                  return word;
                                                            }
                                                            return false;
                                                      })
                                                      .join(" ")}
                                                ...
                                          </p>
                                    </div>
                                    <Link
                                          to={blog.link}
                                          className={
                                                styles["blog-link"] +
                                                " " +
                                                styles["blog-link-" + theme]
                                          }
                                          aria-label="blog link"
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
