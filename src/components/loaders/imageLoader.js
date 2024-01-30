import { useState } from "react";
import styles from "./imageLoader.module.css";
import { Facebook } from "react-content-loader";

export const ImageLoader = ({
      imageAttibutes,
      loaderAttributes,
      containerAttributes,
}) => {
      const [showLoader, setShowLoader] = useState(true);
      return (
            <div style={{ position: "relative" }} {...containerAttributes}>
                  {showLoader ? (
                        <Facebook
                              style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    width: "100%",
                                    height: "100%",
                                    ...loaderAttributes.loaderStyles,
                              }}
                              {...loaderAttributes}
                        ></Facebook>
                  ) : null}
                  <img
                        {...imageAttibutes}
                        style={{
                              visibility: showLoader ? "hidden" : "initial",
                        }}
                        onLoad={() => {
                              setShowLoader(false);
                        }}
                        onError={() => {
                              setShowLoader(false);
                        }}
                  ></img>
            </div>
      );
};
