import styles from "./Header.module.scss"
import cookchef from '../assets/images/cookchef.png'

function Header() {
    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <i class="fa-solid fa-bars mr-5"></i>
            <div className="flex-fill">
            <img  src={cookchef} alt="logo cookchef" />
            </div>
            <ul>
                <button className="mr-5 btn btn-reverse-primary"><span><i class="fa-solid fa-basket-shopping mr-5"></i></span> Panier</button>
                <button className="mr-5 btn btn-primary">Connexion</button>
            </ul>
        </header>
    );
}

export default Header;



// On peut séléctionner des classes directement en l'appelant comme un objet
// <i> La balise I met une icone tirer du site font awesome </i>