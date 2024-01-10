import styles from "./imageOverlay.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const ImageOverlay = ({ index, setShowImageOverlay, loaderData }) => {
      const [currentIndex, setCurrentIndex] = useState(+index);
      console.log(currentIndex);
      return (
            <>
                  <section className={styles["image-overlay"]}>
                        <button
                              className={styles["close-button"]}
                              onClick={() => {
                                    setShowImageOverlay(null);
                              }}
                        >
                              close
                        </button>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                        <img
                              src={loaderData.payload.images[currentIndex]}
                              alt="project"
                              className={styles["overlay-image"]}
                        ></img>

                        <div className={styles["image-controls"]}>
                              <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    onClick={() => {
                                          if (currentIndex === 0) {
                                                setCurrentIndex(
                                                      loaderData.payload.images
                                                            .length - 1
                                                );
                                          } else {
                                                setCurrentIndex((previous) => {
                                                      return previous - 1;
                                                });
                                          }
                                    }}
                                    className={styles["image-control"]}
                              ></FontAwesomeIcon>
                              <FontAwesomeIcon
                                    icon={faArrowRight}
                                    onClick={() => {
                                          if (
                                                currentIndex ===
                                                loaderData.payload.images
                                                      .length -
                                                      1
                                          ) {
                                                setCurrentIndex(0);
                                          } else {
                                                setCurrentIndex((previous) => {
                                                      return previous + 1;
                                                });
                                          }
                                    }}
                                    className={styles["image-control"]}
                              ></FontAwesomeIcon>
                        </div>
                  </section>
            </>
      );
};
