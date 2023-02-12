import React from "react"
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
                <img src={pizzaImg} />
            </div>

            <div className="mainBody">
            {restoranlar.map((e, i) =>
                            <div>
                                <img src={`https://picsum.photos/id/${i}/400/300`} className="margin"/>
                                <div>
                                <h3 className="margin bold">{e}</h3>
                                <button id={`button-${i}`} name="sos" className="margin">Restorana git</button>
                                </div>
                            </div>
                        )}
            </div>

        </section>
    )
}