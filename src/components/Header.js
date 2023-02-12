import React from "react"
import { Link } from "react-router-dom"
import pizzaImg from "../img/Pizza.jpg"


export default function MainHeader() {

    return (
            <div className="mainHeader">
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
    )
}