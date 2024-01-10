import { useAsyncValue } from "react-router";
import { useContext, useRef, useState } from "react";
import styles from "./projectDetails.module.css";
import { themeContext } from "../../context/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ImageOverlay } from "./imageOverlay";

export const ProjectDetails = () => {
      const loaderData = useAsyncValue();
      const { theme } = useContext(themeContext);
      const imagesRef = useRef();
      const [showImageOverlay, setShowImageOverlay] = useState(null);

      return (
            <>
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
                        <div className={styles["project-links"]}>
                              <a
                                    className={
                                          styles["live-button"] +
                                          " " +
                                          styles["live-button-" + theme]
                                    }
                                    href="google.com"
                              >
                                    <FontAwesomeIcon
                                          icon={faGithub}
                                          size="lg"
                                    ></FontAwesomeIcon>
                                    Live
                              </a>
                              <a
                                    className={
                                          styles["github-button"] +
                                          " " +
                                          styles["github-button-" + theme]
                                    }
                                    href="google.com"
                              >
                                    <FontAwesomeIcon
                                          icon={faGithub}
                                          size="lg"
                                    ></FontAwesomeIcon>
                                    github
                              </a>
                        </div>
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
                        <div>
                              <h3
                                    className={
                                          styles["heading"] +
                                          " " +
                                          styles["heading-" + theme]
                                    }
                              >
                                    images and videos:
                              </h3>
                              <div
                                    className={
                                          styles["content"] +
                                          " " +
                                          styles["content-" + theme] +
                                          " " +
                                          styles["projects-container"]
                                    }
                              >
                                    <div
                                          className={styles["project-images"]}
                                          ref={imagesRef}
                                    >
                                          {loaderData.payload.images.map(
                                                (imageLink, index) => {
                                                      return (
                                                            <img
                                                                  src={
                                                                        imageLink
                                                                  }
                                                                  alt="project"
                                                                  className={
                                                                        styles[
                                                                              "project-image"
                                                                        ]
                                                                  }
                                                                  onClick={(
                                                                        event
                                                                  ) => {
                                                                        console.log(
                                                                              event
                                                                                    .target
                                                                                    .src
                                                                        );
                                                                        setShowImageOverlay(
                                                                              event.target.getAttribute(
                                                                                    "data-index"
                                                                              )
                                                                        );
                                                                  }}
                                                                  data-index={
                                                                        index
                                                                  }
                                                            ></img>
                                                      );
                                                }
                                          )}
                                    </div>
                                    <div className={styles["images-controls"]}>
                                          <FontAwesomeIcon
                                                icon={faArrowLeft}
                                                onClick={(event) => {
                                                      event.stopPropagation();
                                                      event.preventDefault();
                                                      imagesRef.current.scrollBy(
                                                            {
                                                                  top: 0,
                                                                  left: -410,
                                                                  behavior: "smooth",
                                                            }
                                                      );
                                                }}
                                                className={
                                                      styles["image-control"]
                                                }
                                          ></FontAwesomeIcon>
                                          <FontAwesomeIcon
                                                onClick={(event) => {
                                                      event.stopPropagation();
                                                      event.preventDefault();
                                                      imagesRef.current.scrollBy(
                                                            {
                                                                  top: 0,
                                                                  left: 410,
                                                                  behavior: "smooth",
                                                            }
                                                      );
                                                }}
                                                icon={faArrowRight}
                                                className={
                                                      styles["image-control"]
                                                }
                                          ></FontAwesomeIcon>
                                    </div>
                              </div>
                        </div>

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
                              {loaderData.payload.toolAndLanguages.map(
                                    (tool) => {
                                          return <li>{tool}</li>;
                                    }
                              )}
                        </ul>
                  </section>
                  {showImageOverlay !== null ? (
                        <ImageOverlay
                              setShowImageOverlay={setShowImageOverlay}
                              index={showImageOverlay}
                              loaderData={loaderData}
                        ></ImageOverlay>
                  ) : null}
            </>
      );
};
