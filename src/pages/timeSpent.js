import { useState, useRef, useEffect } from "react";
import styles from "./timeSpent.module.css";
import { Facebook } from "react-content-loader";
export const TimeSpent = ({ project }) => {
      const [showLoader, setShowLoader] = useState(true);

      //   return (
      //         <>
      //               {showLoader ? (
      //                     <div
      //                           style={{
      //                                 // position: "absolute",
      //                                 // top: 0,
      //                                 // left: 0,
      //                                 // right: 0,
      //                                 // bottom: 0,
      //                                 display: "flex",
      //                                 alignItems: "center",
      //                                 height: "20px",
      //                           }}
      //                     >
      //                           loading image...
      //                     </div>
      //               ) : null}
      //               <img
      //                     onLoad={() => {
      //                           console.log("inside img load");
      //                           setShowLoader(false);
      //                     }}
      //                     className={styles["time-spent-image"]}
      //                     src={project.timeSpentLink}
      //                     alt="waka time"
      //               ></img>
      //         </>
      //   );
      return (
            <>
                  <div
                        style={{
                              position: "relative",
                        }}
                  >
                        <img
                              onLoad={() => {
                                    console.log("inside img load");
                                    setShowLoader(false);
                              }}
                              className={styles["time-spent-image"]}
                              src={project.timeSpentLink}
                              alt="waka time"
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
                        ) : null}
                  </div>
            </>
      );
};
