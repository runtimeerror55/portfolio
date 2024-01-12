import { useState } from "react";
import styles from "./projectImage.module.css";
import { Facebook } from "react-content-loader";

export const ProjectImage = ({ index, imageLink, setShowImageOverlay }) => {
      const [showLoader, setShowLoader] = useState(true);
      return (
            <div className={styles["image-container"]}>
                  {showLoader ? (
                        <Facebook
                              style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    width: "400px",
                                    height: "225px",
                              }}
                              backgroundColor="grey"
                        ></Facebook>
                  ) : null}
                  <img
                        src={imageLink}
                        alt="project"
                        className={styles["project-image"]}
                        onClick={(event) => {
                              console.log(event.target.src);
                              setShowImageOverlay(
                                    event.target.getAttribute("data-index")
                              );
                        }}
                        data-index={index}
                        onLoad={() => {
                              setShowLoader(false);
                        }}
                  ></img>
            </div>
      );
};
