import styles from "./styles.module.scss";
import { ReactComponent as ImageTravel } from "./icons/travel.svg";
import { ReactComponent as IconPlay } from "./icons/play.svg";

export const Hero = () => {
  return (
    <section
      className={`container d-flex align-items-center ${styles["hero"]}`}
    >
      <div className="row position-relative">
        <div className="col-lg-6">
          <h3 className="animate__animated animate__fadeInDown animate__delay-1s">
            Best Destinations around the world
          </h3>
          <h1 className="animate__animated animate__fadeInDown animate__fast">
            Travel, enjoy and live a new and full life
          </h1>
          <h6 className="animate__animated animate__fadeInUp  animate__delay-1s">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </h6>
          <div className="d-flex animate__animated animate__fadeInUp  animate__delay-1s">
            <button className={styles["button-find"]}>Find out more</button>
            <label className="d-flex align-items-center justify-content-center">
              <button className={styles["button-play"] }>
                <IconPlay />
              </button>
              <span className={styles["button-play-text"]}>Play Demo</span>
            </label>
          </div>
        </div>
      </div>
      <ImageTravel className={styles["hero__image-travel"]} />
    </section>
  );
};

export default Hero;
