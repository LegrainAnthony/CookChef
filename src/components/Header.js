import { useState } from "react";
import styles from "./Header.module.scss"
import cookchef from '../assets/images/cookchef.png'
import HeaderMenu from "./headerMenu";

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className={`${styles.header} d-flex flex-row align-items-center`}>
            <div className="flex-fill">
            <img  src={cookchef} alt="logo cookchef" />
            </div>
            <ul className={ styles.headerList}>
                <button className="mr-5 btn btn-reverse-primary"><span><i class="fa-solid fa-heart mr-5"></i></span>Wishlist</button>
                <button className="mr-5 btn btn-primary">Connexion</button>
            </ul>
            <i  onClick={() => setShowMenu(true)} class={`fa-solid fa-bars ${styles.headerXs}`}></i>
            {showMenu && 
            <>
            <div onClick={() => setShowMenu(false)} className="calc" ></div>
            <HeaderMenu />
            </>
            }
        </header>
    );
}

export default Header;



// On peut séléctionner des classes directement en l'appelant comme un objet
// <i> La balise I met une icone tirer du site font awesome </i>