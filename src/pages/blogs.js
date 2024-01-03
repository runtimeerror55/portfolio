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
                                                objects are an unordered
                                                collection of properties where
                                                each property has a name and a
                                                value. objects are one of the
                                                most fundamental data types in
                                                javascript. In fact, almost
                                                everything in javascript can
                                                behave as an object even though
                                                they are not typical objects.
                                                Arrays are a special kind of
                                                object, functions can be thought
                                                of as an object, and even the
                                                primitive data types such as
                                                strings, numbers, and boolean
                                                have methods even though they
                                                are not typical objects.
                                          </p>
                                    </div>
                                    <Link
                                          to={`/projects/${blog._id}`}
                                          className={
                                                styles["blog-link"] +
                                                " " +
                                                styles["blog-link-" + theme]
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
