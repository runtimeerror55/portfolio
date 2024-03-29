import styles from "./tetris-2-information.module.css";
export const TetrisTwo = ({ theme }) => {
      return (
            <div>
                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Game Modes
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              Get ready for an exhilarating Tetris experience
                              with two distinct game modes, each offering its
                              own set of challenges and excitement.
                        </p>
                        <ul>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Mode one:
                                    </b>
                              </li>

                              <ul>
                                    <li>
                                          <b>Single Player:</b> embark on a solo
                                          journey to achieve the highest score
                                          possible.
                                    </li>
                                    <li>
                                          <b>split screen (2 Players):</b>{" "}
                                          invite a friend to join the fun!
                                          Experience the thrill of competitive
                                          Tetris with two players on the same
                                          screen, side by side. It's a test of
                                          skill and strategy as you aim to
                                          outlast and outscore your opponent.
                                    </li>
                              </ul>
                        </ul>

                        <ul>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Mode Two:
                                    </b>
                              </li>

                              <ul>
                                    <li>
                                          <b>Score Until You Die:</b> Keep
                                          clearing lines and stacking blocks
                                          until you can't go on any longer.
                                          Challenge yourself to reach new
                                          heights with each game. Speed of the
                                          tetromino increases at 3 minutes
                                          (1.5x) and 6 minutes (2x).
                                    </li>
                                    <li>
                                          <b>Maximize Score in 5 Min:</b> Feel
                                          the pressure as you aim to achieve the
                                          highest score possible within a time
                                          limit of 5 minutes. Quick thinking and
                                          precision are key to mastering this
                                          fast-paced mode.
                                    </li>
                              </ul>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        In game controls
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <ul>
                              <li>controller only support</li>
                              <li>controller and keyboard support</li>
                              <li> keyboard only support</li>
                              <li>upto 2 controllers are supported</li>
                              <li>
                                    you can change key bindings in the controls
                                    section.
                              </li>
                              <li>
                                    To see mutltiple controllers(mutltiple
                                    contollers should be connected) and
                                    mutltiple keyboards bindings(single
                                    connected keyboard is enough) you need to
                                    select 2 players split screen mode
                              </li>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Naviagtion controls
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              Another big feature of our game is that you get
                              full contoller support and keyboard support for
                              navigating the whole game.
                        </p>
                        <ul>
                              <li>
                                    <b>controller:</b>
                              </li>

                              <ul>
                                    <li>
                                          use d-pad up and d-pad down buttons to
                                          navigate through options, to scroll
                                          guide page
                                    </li>
                                    <li>use X button to select an option</li>
                                    <li>
                                          use B button to go back to previous
                                          options
                                    </li>
                              </ul>
                        </ul>
                        <ul>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          keyboard:
                                    </b>
                              </li>

                              <ul>
                                    <li>
                                          use Arrow up and Arrow down keys to
                                          navigate through options,to scroll
                                          guide page
                                    </li>
                                    <li>use Enter key to select an option</li>
                                    <li>
                                          use backspace key to go back to
                                          previous options
                                    </li>
                              </ul>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Skins
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              Explore our collection of carefully crafted skins,
                              each designed to elevate your gaming experience.
                              With different color schemes and minimalist
                              designs, there's a skin for every taste. Choose
                              the one that reflects your style and adds an extra
                              layer of enjoyment to your Tetris sessions.Our
                              skins are not just about aesthetics—they're
                              designed for optimal visual appeal. Crisp
                              graphics, seamless animations, and attention to
                              detail create a visually engaging environment.
                        </p>

                        <ul>
                              <li>Blue</li>
                              <li>Red</li>
                              <li>Green</li>
                              <li>Violet</li>
                              <li>Yellow</li>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Note
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              The game is does not run at fixed fps. it is
                              develeped with 60fps in mind. If you are playing
                              in higher refresh rate monitors the tetrominos
                              will have higher speed, so play the game at 60fps
                              to get the correct experience. An update will be
                              released soon to be able to play without changing
                              your monitor refresh rate.
                        </p>
                  </div>
            </div>
      );
};
