import React from "react"
import pizzaImg from "../img/Pizza.jpg"

const soslar = ['Pizza sosu', 'Sarımsak sos', 'Meksika acısı', 'Ege zeytinyağı']
const malzemeler = ['Kaşar', 'Mozzarella', 'Mantar', 'Mısır', 'Biber', 'Zeytin', 'Jalapeño', 'Salam', 'Sucuk', 'Pepperoni']

export default function Main() {

    return (
        <section className="main">
            <div className="mainHeader">
                <h2>Techno Eats</h2>
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
        </section>
    )
}