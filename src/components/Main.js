import React from "react"
import { Link } from "react-router-dom"
import pizzaImg from "../img/Pizza.jpg"

const restoranlar = ["McDonals's", "Dominos", "Burger King", "Pizza Hot", "Kentucky Fried Chicken", "Starbucks"]

export default function Main() {

    return (
        <section className="main">

            <div className="mainPhoto">
                <img src={pizzaImg} alt="pizza fotoğrafı" />
                <Link to="/pizza">
                    <div class="centered">Favori restoranına git</div>
                </Link>
            </div>

            <div className="mainBody">
                {restoranlar.map((e, i) =>
                    <div>
                        <img src={`https://picsum.photos/id/${i}/400/300`} className="margin" alt={`{e} fotoğrafı`} />
                        <div>
                            <h3 className="margin bold">{e}</h3>
                            <button name={e} className="margin button">Restorana git</button>
                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}