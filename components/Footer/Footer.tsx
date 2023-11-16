import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="wa-ft-lg">
	        <a href="https://wa.me/19162202361">
                <img src="./assets/images/LENAJ-whatsApp-honeycomb_black-03.png" alt="whatsapp-black" className="wa-logo-lg">
            </a>
            <a href="facetime://+19162202361">
                <img src="./assets/images/LENAJ-faceTime-honeycomb_mustard-yellow-04.png" alt="facetime-logo" className="ft-logo-lg">
            </a>
        </div>
    </footer>
  );
}

export default Footer;