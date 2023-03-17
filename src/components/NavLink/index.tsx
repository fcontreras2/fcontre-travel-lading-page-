import styles from "./styles.module.scss";

type NavLinkProps = {
  href: string;
  content: string;
};

export const NavLink = ({ href, content }: NavLinkProps) => {
  return (
    <a className={styles["nav-link"]} href={href}>
      {content}
    </a>
  );
};
