import styles from "./projectPage.module.css";
import stylesOne from "../homePage.module.css";
import baymax from "../../assets/images/baymax.jpeg";
import profile from "../../assets/images/profile.jpg";

export const ProjectPage = () => {
      return (
            <div className={stylesOne["page"]}>
                  <div className={stylesOne["banner"]}>
                        <img
                              src={profile}
                              alt="baymax"
                              className={stylesOne["profile"]}
                        ></img>
                  </div>
                  <main className={stylesOne["main"]}>
                        <section className={styles["project-section"]}>
                              <h2 className={styles["project-name"]}>
                                    Tetris (version 1.0)
                              </h2>
                              <p className={styles["introduction"]}>
                                    Welcome to our web-based Tetris game!
                                    Immerse yourself in the classic world of
                                    falling blocks and strategy as you challenge
                                    your skills and aim for high scores. Get
                                    ready to experience Tetris like never
                                    before, right in your web browser
                              </p>
                              <h3>Key functionalities:</h3>
                              <ol>
                                    <li>move down</li>
                                    <li>move right</li>
                                    <li>move left</li>
                                    <li>generate board nodes matrix</li>
                                    <li>destroying blocks</li>
                                    <li>ui renderer</li>
                                    <li>shifting blocks</li>
                                    <li>updating player binary matrix</li>
                                    <li>isPossibletoMove</li>
                                    <li>update score</li>
                                    <li>update currentTetromino</li>
                              </ol>
                              <h3>Lannguages and tools used:</h3>
                              <ol>
                                    <li>html</li>
                                    <li>javscript</li>
                                    <li>css</li>
                                    <li>ejs</li>
                                    <li>express</li>
                                    <li>express-session</li>
                                    <li>passport</li>
                                    <li>passport-local</li>
                                    <li>passport-local-mongoose</li>
                                    <li>mongoose</li>
                                    <li>express</li>
                              </ol>
                        </section>
                  </main>
            </div>
      );
};
