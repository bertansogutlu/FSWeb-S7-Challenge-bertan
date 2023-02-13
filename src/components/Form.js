import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import pizzaImg from "../img/Pizza.png"
import { useState } from "react"
import * as Yup from 'yup';

const soslar = ['Pizza sosu', 'Sarımsak sos', 'Meksika acısı', 'Ege zeytinyağı']
const malzemeler = ['Kaşar', 'Mozzarella', 'Mantar', 'Mısır', 'Biber', 'Zeytin', 'Jalapeño', 'Salam', 'Sucuk', 'Pepperoni']

const formSchema = Yup.object({
    isim: Yup.string().required("Bu alan gereklidir").min(2, "İsim en az 2 karakter olmalıdır")
});



export default function FormData() {

    const initial = { isim: '', boyut: '', sos: '', malzeme1: false, malzeme2: false, malzeme3: false, malzeme4: false, malzeme5: false, malzeme6: false, malzeme7: false, malzeme8: false, malzeme9: false, malzeme10: false, un: false, özel: '', adet: 0 };
    const [siparis, setSiparis] = useState(initial);
    const [isimError, setIsimError] = useState([])
    const { isim, boyut, sos, un, özel, adet } = siparis;

    function handleError(name, value) {

        Yup.reach(formSchema, name)
            .validate(value)
            .then(() => {
                setIsimError("")
            })
            .catch((err) => {
                setIsimError(err.errors)
            })
    }

    console.log(isimError)

    function handleChange(event) {
        console.log(event.target.name, event.target.value)
        event.target.name === "isim" && handleError(event.target.name, event.target.value)
        setSiparis({ ...siparis, [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value })
    }

    function reset() {
        setSiparis(initial)
        console.log(siparis)
    }

    console.log(siparis)

    function submit(event) {
        event.preventDefault();

        axios.post('https://reqres.in/api/orders', siparis)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <section className="form">

            <form onSubmit={submit} className="formBody">

                <h3 className="center padding bold">Kendi pizzanızı yapın</h3>
                <img src={pizzaImg} alt="pizza fotoğrafı" />
                <h3 className="padding bold">Haydi başlayalım</h3>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">İsminiz</h3>
                    </div>

                    <label>
                        <input type="text" className="margin" name="isim" value={isim} onChange={handleChange} />
                        <p className="margin" style={{ color: "red" }}>{isimError}</p>
                    </label>
                </div>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">Boyut seçimi</h3>
                        <p className="padding">Gerekli</p>
                    </div>

                    <select className="margin" name="boyut" value={boyut} onChange={handleChange}>
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
                                    <input type="radio" className="margin" name="sos" value={e} checked={sos === `${e}`} onChange={handleChange} />
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
                                    <input type="checkbox" className="margin" name={`malzeme${i + 1}`} value={e} checked={siparis[`malzeme${i + 1}`]} onChange={handleChange} />
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
                        <input type="checkbox" className="margin" name="un" value="glutensiz" checked={un} onChange={handleChange} />
                        Gulutensiz un
                    </label>
                </div>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">Özel bir isteğiniz var mı?</h3>
                    </div>

                    <label>
                        <textarea className="box" name="özel" value={özel} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <input type="number" name="adet" min="0" max="10" className="margin" value={adet} onChange={handleChange} />
                    <Link to="/confirmation">
                        <button type="submit" className="margin">Siparişi tamamla</button>
                    </Link>
                    <button type="button" onClick={reset}>Temizle</button>
                </div>
                
            </form>

        </section>
    )
}