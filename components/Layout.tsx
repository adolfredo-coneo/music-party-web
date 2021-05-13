import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <div >
        <main className={styles.main}>
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
