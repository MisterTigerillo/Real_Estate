import headerImage from "../../assets/headerImage.jpg";
import { Container } from "components/Container";
import styles from "./RealEstate.module.css";
export const RealEstate = () => {
  return (
    <main className="realEstate">
      <Container>
        <img className={styles.headerImage} src={headerImage} alt="" />
        {console.log({ headerImage })}
        I'm Real Estate Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam temporibus veniam praesentium, hic officiis maiores
        necessitatibus reprehenderit, quo similique dolores dolorum optio
        eveniet eos dolorem at et nostrum. Quasi, aliquam.
      </Container>
    </main>
  );
};
