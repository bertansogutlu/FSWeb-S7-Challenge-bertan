import React from "react"
import pizzaImg from "../img/Pizza.jpg"


export default function Confirmation({ siparisData }) {

    return (
        <section className="main">

            <div className="mainPhoto">
                <img src={pizzaImg} alt="pizza fotoğrafı" />
                <div class="centered">Tebrikler {siparisData.isim}! Pizzan yola çıktı</div>
            </div>
            <div className="siparis">
                <p className="bold margin">
                Sipariş adedi: {siparisData.adet}
                </p>
                <p className="bold margin">
                Pizza boyutu: {siparisData.boyut}
                </p>
                <p className="bold margin">
                Sos seçimi: {siparisData.sos}
                </p>
                <p className="bold margin">
                Özel istek: {siparisData["özel"]}
                </p>
            </div>
        </section>
    )
}