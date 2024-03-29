import { useState, forwardRef, useContext } from "react";
import styles from "./projectImage.module.css";
import { Facebook } from "react-content-loader";
import { themeContext } from "../../context/theme";

export const ProjectImage = forwardRef(
      ({ index, imageLink, setShowImageOverlay }, ref) => {
            const [showLoader, setShowLoader] = useState(true);
            const { theme } = useContext(themeContext);
            return (
                  <div className={styles["image-container"]}>
                        {showLoader ? (
                              <Facebook
                                    style={{
                                          position: "absolute",
                                          top: "0",
                                          left: "0",
                                          right: "0",
                                          width: "100%",
                                          height: "100%",
                                    }}
                                    backgroundColor="grey"
                              ></Facebook>
                        ) : null}
                        <img
                              src={imageLink}
                              alt="project"
                              className={
                                    styles["project-image"] +
                                    " " +
                                    styles["project-image-" + theme]
                              }
                              onClick={(event) => {
                                    console.log(event.target.src);
                                    setShowImageOverlay(
                                          event.target.getAttribute(
                                                "data-index"
                                          )
                                    );
                              }}
                              ref={index === 0 ? ref : null}
                              data-index={index}
                              onLoad={() => {
                                    setShowLoader(false);
                              }}
                        ></img>
                  </div>
            );
      }
);
