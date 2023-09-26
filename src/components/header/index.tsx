import styles from "./header.module.css"
import { Link } from "react-router-dom"
import imglogo from "../../assets/logo.svg"

function Header() {
    return (
        <header className={styles.container}>
            <div>
                <Link to="/">
                    <img src={imglogo} alt="logo" />
                </Link>
            </div>
        </header>
    )
}

export default Header