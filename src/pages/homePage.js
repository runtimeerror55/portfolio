import styles from "./homePage.module.css";
import baymax from "../assets/images/baymax.jpeg";
import profile from "../assets/images/profile.jpg";
import { Projects } from "./Projects";
export const HomePage = () => {
      return (
            <div className={styles["page"]}>
                  <div className={styles["banner"]}>
                        <img
                              src={profile}
                              alt="baymax"
                              className={styles["profile"]}
                        ></img>
                  </div>
                  <main className={styles["main"]}>
                        <Projects></Projects>
                        {/* <section>
                              <div className={styles["menu-item"]}>
                                    Projects
                              </div>
                              <div className={styles["menu-item"]}>Blogs</div>
                              <div className={styles["menu-item"]}>About</div>
                        </section> */}
                  </main>
            </div>
      );
};
