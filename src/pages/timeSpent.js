import { useState, useRef, useEffect } from "react";
import styles from "./timeSpent.module.css";
import { Facebook } from "react-content-loader";
export const TimeSpent = ({ project }) => {
      const [showLoader, setShowLoader] = useState(true);

      return (
            <>
                  <div
                        style={{
                              position: "relative",
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              gap: "4px",
                        }}
                  >
                        <img
                              onLoad={() => {
                                    setShowLoader(false);
                              }}
                              onError={() => {
                                    setShowLoader(false);
                              }}
                              className={styles["time-spent-image"]}
                              src={project.timeSpentLink}
                              alt="time spent"
                        ></img>
                        {showLoader ? (
                              <div
                                    style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          right: 0,
                                          bottom: 0,
                                          display: "flex",
                                          alignItems: "center",
                                    }}
                              >
                                    loading image...
                              </div>
                        ) : (
                              <div
                                    style={{
                                          backgroundColor: "green",
                                          paddingLeft: "3px",
                                          paddingRight: "3px",
                                          borderRadius: "3px",
                                          color: "white",
                                    }}
                              >
                                    {project.tags[0]}
                              </div>
                        )}
                  </div>
            </>
      );
};
