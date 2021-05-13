import headerStyles from "../styles/Header.module.css";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Welcome to <a href="https://nextjs.org">Music Party!</a>
      </h1>

      <p className={headerStyles.description}>
        Get started by sharing music!
      </p>
    </div>
  );
};

export default Header;
