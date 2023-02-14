import React from "react"
import { Link } from "react-router-dom"
import pizzaImg from "../img/Pizza.jpg"
import { restoranlar } from "./restoranlarData"


export default function Main() {

    return (
        <section className="main">

            <div className="mainPhoto">
                <img src={pizzaImg} alt="pizza fotoğrafı" />
                <Link to="/pizza">
                    <button>Favori restoranına git</button>
                </Link>
            </div>

            <div className="mainBody">
                {restoranlar.map((e, i) =>
                    <div key={`restoran${i}`}>
                        <img src={e.img} className="margin" alt={`{e.name} fotoğrafı`} />
                        <div>
                            <h3 className="margin bold">{e.name}</h3>
                            <button name={e.name} className="margin button">Restorana Git</button>
                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}