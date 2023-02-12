import React from "react"
import pizzaImg from "../img/Pizza.jpg"


export default function Confirmation() {

    return (
        <section className="main">

            <div className="mainPhoto">
                <img src={pizzaImg} alt="pizza fotoğrafı"/>
                <div class="centered">Siparişiniz alındı</div>
            </div>

        </section>
    )
}