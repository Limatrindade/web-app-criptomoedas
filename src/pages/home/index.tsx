import styles from "./home.module.css"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

function Home() {
    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <input type="text" 
                    placeholder="Digite a sua moeda"
                />
                <button type="submit">
                    <BiSearch size={30} color="#fff" />
                </button>
            </form>


            <table>
                <thead>
                    <tr>
                        <th scope="col">Moeda</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Volume</th>
                    </tr>
                </thead>

                <tbody id="tbody">
                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moeda">
                            <Link className={styles.link} to="/detail/btc">
                                <span>Bitcoin</span> | BTC
                            </Link>
                        </td>
                        <td className={styles.tdLabel} data-label="Mercado">
                            <span>R$ 19234</span>
                        </td>
                        <td className={styles.tdLabel} data-label="Preço">
                            <span>R$ 40.888</span>
                        </td>
                        <td className={styles.tdProfit} data-label="Volume">
                            <span>-5.1</span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </main>
    )
}

export default Home