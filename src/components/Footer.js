import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
            <p>No Copyright © 2022 Anthony Legrain </p>
        </footer>
    );
}

export default Footer;