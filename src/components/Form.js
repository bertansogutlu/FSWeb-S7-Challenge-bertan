import React from "react"
import pizzaImg from "../img/Pizza.png"

export default function FormData() {

    return (
        <section>
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
                <div>
                    <h3>Build Your Own Pizza</h3>
                </div>
                <img src={pizzaImg}/>

                <div>
                    <form>

                    </form>
                </div>
            </div>
        </section>
    )
}