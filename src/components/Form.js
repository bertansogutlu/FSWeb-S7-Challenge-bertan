import React from "react"
import pizzaImg from "../img/Pizza.png"
import "./form.css"

const soslar = ['Pizza sosu', 'Sarımsak sos', 'Meksika acısı', 'Ege zeytinyağı']
const malzemeler = ['Kaşar', 'Mozzarella', 'Mantar', 'Mısır', 'Biber', 'Zeytin', 'Jalapeño', 'Salam', 'Sucuk', 'Pepperoni']

export default function FormData() {

    return (
        <section className="form">
            <div className="formHeader">
                <h2>Techno Eats</h2>
                <div>
                    <button>
                        Home
                    </button>
                    <button>
                        Help
                    </button>
                </div>

            </div>

            <div className="formBody">

                <h3 className="center padding bold">Kendi pizzanızı yapın</h3>
                <img src={pizzaImg} />
                <h3 className="padding bold">Kendi pizzanızı yapın</h3>

                <form>
                    <div>
                        <div className="grey">
                            <h3 className="padding bold">Boyut seçimi</h3>
                            <p className="padding">Gerekli</p>
                        </div>
                        <input className="margin"></input>
                    </div>

                    <div>
                        <div className="grey">
                            <h3 className="padding bold">Sos seçimi</h3>
                            <p className="padding">Gerekli</p>
                        </div>

                        <div>
                            {soslar.map((e, i) =>
                                <div>
                                    <label>
                                        <input type="radio" id={`radio-${i}`} name={e} className="margin"></input>
                                        {e}
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="grey">
                            <h3 className="padding bold">Malzeme seçimi</h3>
                            <p className="padding">10 malzemeye kadar</p>
                        </div>

                        <div className="flex">
                            {malzemeler.map((e, i) =>
                                <div className="half">
                                    <label>
                                        <input type="checkbox" className="margin" id={`radio-${i}`} name={e}></input>
                                        {e}
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="grey">
                            <h3 className="padding bold">Sağlınıza önem veriyoruz</h3>
                        </div>

                        <label>
                            <input type="checkbox" className="margin" id="" name=""></input>
                            Gulutensiz Un
                        </label>
                    </div>

                    <div>
                        <div className="grey">
                            <h3 className="padding bold">Özel bir isteğiniz var mı?</h3>
                        </div>

                        <label>
                            <textarea className="box" rid="" name=""></textarea>
                        </label>
                    </div>

                </form>

            </div>
        </section>
    )
}