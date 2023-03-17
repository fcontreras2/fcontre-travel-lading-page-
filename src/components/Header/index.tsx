import { NavLink } from "../NavLink";
import styles from "./styles.module.scss";

const NAV_LINKS = [
  {
    href: "#destinations",
    content: "Destinations",
  },
  {
    href: "#hola",
    content: "Hotels",
  },

  {
    href: "#hola",
    content: "Flights",
  },
  {
    href: "#hola",
    content: "Bookings",
  },
  {
    href: "#hola",
    content: "Login",
  },
  {
    href: "#hola",
    content: "Sign up",
  },
];

export const Header = () => {
  return (
    <nav className={" container " + styles["nav"]}>
      <div className="row d-flex align-items-center">
        <div className="col">
          <img
            src="/images/logo.svg"
            alt="Jadoo"
            className={styles["nav__logo"]}
          />
        </div>
        <div
          className={
            styles["nav__links"] + " col-9 d-lg-flex justify-content-end "
          }
        >
          {NAV_LINKS.map((link, index) => (
            <NavLink key={`${link}-${index}`} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
