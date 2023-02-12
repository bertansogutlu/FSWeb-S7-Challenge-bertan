import React from "react"
import { Link } from "react-router-dom"
import pizzaImg from "../img/Pizza.jpg"

const restoranlar = ["McDonals's", "Dominos", "Burger King", "Pizza Hot", "Kentucky Fried Chicken", "Starbucks"]

export default function Main() {

    return (
        <section className="main">
            <div className="mainHeader">
                <h2>Techno</h2>
                <div>
                    <button className="button">
                        Home
                    </button>
                    <button className="button">
                        Help
                    </button>
                </div>
            </div>

            <div className="mainPhoto">
                <img src={pizzaImg} alt="pizza fotoğrafı"/>
                <Link to="/pizza">
                <div class="centered">Favori restorana git</div>
                </Link>
            </div>

            <div className="mainBody">
            {restoranlar.map((e, i) =>
                            <div>
                                <img src={`https://picsum.photos/id/${i}/400/300`} className="margin" alt={`{e} fotoğrafı`}/>
                                <div>
                                <h3 className="margin bold">{e}</h3>
                                <button id={`button-${i}`} name={e} className="margin">Restorana git</button>
                                </div>
                            </div>
                        )}
            </div>

        </section>
    )
}