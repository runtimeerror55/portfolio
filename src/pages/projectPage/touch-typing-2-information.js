import styles from "./touch-typing-2-information.module.css";
export const TouchTypingTwo = ({ theme }) => {
      return (
            <div>
                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Settings
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <ul>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Timers:{" "}
                                    </b>
                                    choose timers according to your choice.
                                    Having different timers let you practise in
                                    more effective way.
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Themes:{" "}
                                    </b>
                                    multiple themes to choose from. Choose the
                                    one that you like the most. Having different
                                    themes can enrich your typing experience.
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          sounds:{" "}
                                    </b>
                                    multiple sounds to choose from. Choose the
                                    one that you like the most. Having different
                                    sound can enrich your typing experience.
                              </li>

                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Mode one:{" "}
                                    </b>
                                    <ul>
                                          <li>
                                                <b
                                                      className={
                                                            styles["heading"] +
                                                            " " +
                                                            styles[
                                                                  "heading-" +
                                                                        theme
                                                            ]
                                                      }
                                                >
                                                      test mode:
                                                </b>{" "}
                                                This mode lets you test your
                                                typing skills. This is the mode
                                                where your actual stats are
                                                calculated. Consistantly take
                                                tests to improve your typing
                                                skills.
                                          </li>
                                          <li>
                                                <b
                                                      className={
                                                            styles["heading"] +
                                                            " " +
                                                            styles[
                                                                  "heading-" +
                                                                        theme
                                                            ]
                                                      }
                                                >
                                                      practise mode:
                                                </b>
                                                This mode lets you practise
                                                individual words. Practise the
                                                words that you are often making
                                                mistakes and improve your typing
                                                skills.
                                          </li>
                                    </ul>
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Lannguages and ranges:{" "}
                                    </b>
                                    There are multiple Lannguages and sets to
                                    choose from. each set has fixed number of
                                    words ,numbers,special characters. Each set
                                    has its own stats. each set has enough words
                                    so that way you will be able to test
                                    yourself or practise words from that set
                                    without feeling of too many words if you are
                                    a beginner.
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Mode two:{" "}
                                    </b>
                                    This mode is active in practise mode. To
                                    simulate real test experience you can choose
                                    to have a random word paired with the actual
                                    word.
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Filter by speed:{" "}
                                    </b>
                                    This mode is active in practise mode. This
                                    mode has the average speed of last 20 speeds
                                    of each word that you typed in test mode.
                                    This gives you better understanding of which
                                    words you are often making mistakes and
                                    practise accordingly to improve.
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
                        Why MINITYPE
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <ol>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          I want to have simple,elegant ,easy to
                                          use use typing website?
                                    </b>
                                    <p>
                                          Keeping this in mind, MINITYPE was
                                          built to be simple,elegant and easy to
                                          use. I am sure it is quiet evident
                                          once you experience it.
                                    </p>
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          I dont want have to have too much
                                          customization?
                                    </b>
                                    <p>
                                          This is one of the features of
                                          MINITYPE, there arent too many
                                          unecessary options nor too less
                                          important options. MINITYPE has
                                          balanced enough customization like
                                          different themes, timers,
                                          sounds,words,stats which are essential
                                    </p>
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          I want see my stats like speed,
                                          accuracy of all tests and also for
                                          recent tests to see if i am improving?
                                    </b>
                                    <p>
                                          This is one of the most important
                                          feature for improving typing skills.
                                          MINITYPE has all the stats like speed,
                                          accuracy,highest speed of a test,total
                                          time spent in tests for all the tests.
                                          But we know that your all time
                                          averages is not the reflection of your
                                          current skills , so MINITYPE also
                                          calculates averages of the last 20
                                          tests which is far more better
                                          indication of your current skills. The
                                          best part is these stats are displayed
                                          right on the typing page , so that you
                                          dont need to go to other pages to
                                          contantly check your stats. stats
                                          being displayed right on the typing
                                          page are just a glance away.
                                    </p>
                              </li>

                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          There are too many words to improve?
                                    </b>
                                    <p>
                                          MINITYPE knows that too many words can
                                          be overwhelming and takes too long to
                                          improve speed and accuracy . MINITYPE
                                          has different sizes of sets of words
                                          which can reach close to 350 words.
                                          Having smaller set of words like 100
                                          words will make you increase
                                          speeds,accuracy in quicker time and
                                          more concentration per word. All these
                                          different sets of words have their own
                                          stats so that you know where you stand
                                          in a particular set.
                                    </p>
                              </li>

                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          Are the test word positions generated
                                          randomly, what if i type some words
                                          too many times and some words lot
                                          less?
                                    </b>
                                    <p>
                                          Lot of the other typing websites do
                                          this and MINITYPE knows that randomly
                                          generating word positions can make you
                                          type some words too many times and
                                          some words a lot lesser over a period
                                          of time as it is not guaranteed. But
                                          MINITYPE has an algorithm where it
                                          tracks how many times you have typed a
                                          word in all tests and generates the
                                          tests word positions from least
                                          frequently typed too highest
                                          frequently typed word(also shuffles
                                          the words so that there wont be same
                                          order of words). This way all the
                                          words are typed almost evenly and also
                                          randomly. This is one of the best
                                          features of MINITYPE.
                                    </p>
                              </li>

                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          I want to practise words that i am not
                                          good at?
                                    </b>
                                    <p>
                                          Oh yes you really should be able to do
                                          that. It is one of the essential
                                          feature to practise words that you are
                                          not so good at. MINITYPE has another
                                          feature called "PRACTISE MODE" where
                                          it has speed data of all the words of
                                          your tests and categorises into
                                          different speeds from low to high.
                                          Here you can practise individual words
                                          as long as you want to.
                                    </p>
                              </li>

                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          I want to improve my numpad skills?
                                    </b>
                                    <p>
                                          MINITYPE does have a set where all of
                                          them are just numbers of different
                                          lengths where you can test your numpad
                                          skills.This is essential for people
                                          who use numpad a lot.
                                    </p>
                              </li>
                        </ol>
                  </div>

                  {/* <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Timer
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              choose timers according to your choice. Having
                              different timers let you practise in more
                              effective way.
                        </p>
                        <ul>
                              <li>15 seconds</li>
                              <li>30 seconds</li>
                              <li>60seconds</li>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Themes
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              multiple themes to choose from. Choose the one
                              that you like the most. Having different themes
                              can enrich your typing experience.
                        </p>
                        <ul>
                              <li>blue</li>
                              <li>Violet</li>
                              <li>green</li>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        Sounds
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              multiple sounds to choose from. Choose the one
                              that you like the most. Having different sound can
                              enrich your typing experience.
                        </p>
                        <ul>
                              <li>sound a</li>
                              <li>sound b</li>
                        </ul>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        mode one
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <ul>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          test mode:
                                    </b>{" "}
                                    This mode lets you test your typing skills.
                                    This is the mode where your actual stats are
                                    calculated. Consistantly take tests to
                                    improve your typing skills.
                              </li>
                              <li>
                                    <b
                                          className={
                                                styles["heading"] +
                                                " " +
                                                styles["heading-" + theme]
                                          }
                                    >
                                          practise mode:
                                    </b>
                                    This mode lets you practise individual
                                    words. Practise the words that you are often
                                    making mistakes and improve your typing
                                    skills.
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
                        Lannguages and ranges
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              There are multiple Lannguages and sets to choose
                              from. each set has fixed number of words
                              ,numbers,special characters. Each set has its own
                              stats. each set has enough words so that way you
                              will be able to test yourself or practise words
                              from that set without feeling of too many words if
                              you are a beginner.
                        </p>
                  </div>

                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        mode two
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              This mode is active in practise mode. To simulate
                              real test experience you can choose to have a
                              random word paired with the actual word.
                        </p>
                        <ul>
                              <li>no random word</li>
                              <li>random word</li>
                        </ul>
                  </div>
                  <h3
                        className={
                              styles["heading"] +
                              " " +
                              styles["heading-" + theme]
                        }
                  >
                        mode three
                  </h3>
                  <div
                        className={
                              styles["content"] +
                              " " +
                              styles["content-" + theme]
                        }
                  >
                        <p className={styles["p1"]}>
                              This mode is active in practise mode. This mode
                              has the average speed of last 20 speeds of each
                              word that you typed in test mode. This gives you
                              better understanding of which words you are often
                              making mistakes and practise accordingly to
                              improve.
                        </p>
                  </div> */}
            </div>
      );
};
