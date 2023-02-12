import React from "react"
import { Link } from "react-router-dom"
import pizzaImg from "../img/Pizza.png"
import { useState } from "react"

const soslar = ['Pizza sosu', 'Sarımsak sos', 'Meksika acısı', 'Ege zeytinyağı']
const malzemeler = ['Kaşar', 'Mozzarella', 'Mantar', 'Mısır', 'Biber', 'Zeytin', 'Jalapeño', 'Salam', 'Sucuk', 'Pepperoni']

export default function FormData() {

    const initial = {isim : '', boyut : '', sos:'', malzeme1 : '', malzeme2 : '', malzeme3 : '', malzeme4 : '', malzeme5 : '', un: false, özel: ''};
    const [siparis, setSiparis] = useState(initial);
    const {isim, boyut, sos, malzeme1, malzeme2, malzeme3, malzeme4, malzeme5, un, özel} = siparis;

    function handleChange(event) {
        console.log(event.target.name, event.target.value)
        setSiparis({...siparis, [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value})
    }

    console.log(siparis)

    function submit(event) {
       
    }

    return (
        <section className="form">
            <div className="formHeader">
                <h2>Techno Eats</h2>
                <div>
                    <Link to="/">
                        <button className="button">
                            Home
                        </button>
                    </Link>
                    <button className="button">
                        Help
                    </button>
                </div>
            </div>
            <form onSubmit={submit} id="pizza-form" className="formBody">
                <h3 className="center padding bold">Kendi pizzanızı yapın</h3>
                <img src={pizzaImg} alt="pizza fotoğrafı"/>
                <h3 className="padding bold">Haydi başlayalım</h3>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">İsminiz</h3>
                    </div>

                    <label>
                        <input type="text" id="name-input" className="margin" name="isim" value={isim} onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">Boyut seçimi</h3>
                        <p className="padding">Gerekli</p>
                    </div>

                    <select id="select" className="margin" name="boyut" onChange={handleChange}>
                        <option >Küçük</option>
                        <option >Orta</option>
                        <option >Büyük</option>
                    </select>
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
                                    <input type="radio" id={`radio-${i}`} className="margin" name="sos" value={e} checked={sos === `${e}`} onChange={handleChange}/>
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
                                    <input type="checkbox" id={`radio-${i}`} className="margin" name={`malzeme${i+1}`} value={e} onChange={handleChange}/>
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
                        <input type="checkbox" className="margin" name="un" value="glutensiz" checked={un} onChange={handleChange}/>
                        Gulutensiz un
                    </label>
                </div>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">Özel bir isteğiniz var mı?</h3>
                    </div>

                    <label>
                        <textarea className="box" name="özel" onChange={handleChange}/>
                    </label>
                </div>

                <div>
                    <label>
                        <input type="number" name="adet" min="1" max="10" className="margin" onChange={handleChange}/>
                    </label>

                    <label>
                        <button type="submit" className="margin">Siparişi tamamla</button>
                    </label>
                </div>

            </form>
        </section>
    )
}