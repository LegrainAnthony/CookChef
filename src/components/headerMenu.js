import styles from './HeaderMenu.module.scss';

function headerMenu() {
    return (
        <div className={`${styles.menuContainer} card p-20`}>
            <li>Wishlist</li>
            <li>Connexion</li>
        </div>
    );
}

export default headerMenu;