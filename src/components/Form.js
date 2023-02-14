import React from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const soslar = ['Pizza sosu', 'Sarımsak sos', 'Meksika acısı', 'Ege zeytinyağı']
const malzemeler = ['Kaşar', 'Mozzarella', 'Mantar', 'Mısır', 'Biber', 'Zeytin', 'Jalapeño', 'Salam', 'Sucuk', 'Pepperoni']

const siparisSchema = Yup.object({
    isim: Yup
        .string()
        .required("Bu alan zorunludur")
        .min(2, "İsim en az 2 karakter olmalıdır")
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Sadece latin harfleri kullanınız'
        ),
});



export default function FormData({ setSiparisData }) {

    const initial = { isim: '', boyut: '', sos: '', malzeme1: false, malzeme2: false, malzeme3: false, malzeme4: false, malzeme5: false, malzeme6: false, malzeme7: false, malzeme8: false, malzeme9: false, malzeme10: false, un: false, özel: '', adet: 0 };
    const [siparis, setSiparis] = useState(initial);
    const { isim, boyut, sos, un, özel, adet } = siparis;
    const [buttonDisable, setButtonDisable] = useState(true);

    useEffect(() => {
        siparisSchema.isValid(siparis).then((valid) => setButtonDisable(!valid));
    }, [siparis]);

    const [siparisError, setSiparisError] = useState({
        isim: "",
    });


    function handleError(name, value) {

        Yup.reach(siparisSchema, name)
            .validate(value)
            .then(() => {
                setSiparisError({
                    ...siparisError,
                    [name]: ""
                });
            })
            .catch((error) => {
                setSiparisError({
                    ...siparisError,
                    [name]: error.errors[0]
                });
            })

    }

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

    const history = useHistory();

    function submit(event) {
        event.preventDefault();

        axios.post('https://reqres.in/api/orders', siparis)
            .then(function (response) {
                console.log(response);
                setSiparisData(response.data);
                history.push('/confirmation');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <section className="form">

            <form onSubmit={submit} className="formBody">

                <h3 className="center padding bold">Kendi pizzanızı yapın</h3>
                <img src="https://images.deliveryhero.io/image/fd-tr/LH/ilnl-hero.jpg?width=2000&height=500&quality=45" alt="pizza fotoğrafı" />
                <h3 className="padding bold">Haydi başlayalım</h3>

                <div>
                    <div className="grey">
                        <h3 className="padding bold">İsminiz</h3>
                    </div>

                    <label>
                        <input type="text" className="margin" name="isim" value={isim} onChange={handleChange} />
                        {siparisError.isim !== "" && <div style={{ color: "#ea004b", display: "inline", marginLeft: "0.5rem" }}>{siparisError.isim}</div>}
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
                    <input type="number" className="input" name="adet" min="0" max="10" value={adet} onChange={handleChange} />
                    <button type="submit" className="button" disabled={buttonDisable}>Siparişi tamamla</button>
                    <button type="button" className="button" onClick={reset}>Temizle</button>
                </div>

            </form>

        </section>
    )
}