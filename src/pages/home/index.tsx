import styles from "./home.module.css"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

// https://sujeitoprogramador.com/api-cripto/?key=80e3c71be7f89fd5

interface CoinsProps {
    name: string
    delta_24h: string
    price: string
    symbol: string
    volume_24h: string
    market_cap: string
    formatedPrice: string
    formatedMarket: string
}

interface DataProps {
    coins: CoinsProps[]
}

function Home() {
    const [coins, setCoins] = useState<CoinsProps[]>([])

    useEffect(() => {

        function getData() {
            fetch("https://sujeitoprogramador.com/api-cripto/?key=80e3c71be7f89fd5&pref=BRL")
            .then(response => response.json())
            .then((data: DataProps) => {
                const coinsData = data.coins.slice(0, 15)

                const price = Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })
                
                const formatResult = coinsData.map((itens) => {
                    const formated = {
                        ...itens,
                        formatedPrice: price.format(Number(itens.price)),
                        formatedMarket: price.format(Number(itens.market_cap))
                    }

                    return formated
                })

                setCoins(formatResult)
                
            })
        }

        getData()

    },[])

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
                    {coins.map(coin => (
                        <tr key={coin.name} className={styles.tr}>
                            <td className={styles.tdLabel} data-label="Moeda">
                                <Link className={styles.link} to={`/detail/${coin.symbol}`}>
                                    <span>{coin.name}</span> | {coin.symbol}
                                </Link>
                            </td>
                            <td className={styles.tdLabel} data-label="Mercado">
                                <span>{coin.formatedMarket}</span>
                            </td>
                            <td className={styles.tdLabel} data-label="Preço">
                                <span>{coin.formatedPrice}</span>
                            </td>
                            <td className={Number(coin?.delta_24h) >= 0 ? styles.tdProfit : styles.tdLoss} data-label="Volume">
                                <span>{coin.delta_24h}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </main>
    )
}

export default Home