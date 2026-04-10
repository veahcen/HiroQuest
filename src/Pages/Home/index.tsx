
import styles from './index.module.css';
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Block from "../../Components/Block/Block.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

const Home = () => {
  return (
    <div className={styles.home}>
      <NavBar />
      <Block />
      <Footer />
    </div>
  );
};

export default Home;