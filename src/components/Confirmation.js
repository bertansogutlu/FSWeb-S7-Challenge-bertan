import React from "react"
import pizzaImg from "../img/Pizza.jpg"


export default function Confirmation({ siparisData }) {

    return (
        <section className="main">

            <div className="mainPhoto">
                <img src={pizzaImg} alt="pizza fotoğrafı" />
                <div class="centered">Tebrikler {siparisData.isim}! Pizzan yola çıktı</div>
            </div>
            <div>
                Sipariş adedi: {siparisData.adet}
                Pizza boyutu: {siparisData.boyut}
                Pizza sosu: {siparisData.sos}
                Özel istek: {siparisData["özel"]}
            </div>
        </section>
    )
}