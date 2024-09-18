import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h3>Escreva sobre o que voce tem interesse!</h3>
        <p>Mini Blog &copy; 2024</p>
        <p>Desenvolvido por Carlos Henrique</p>
      </footer>
    </div>
  );
};

export default Footer;
