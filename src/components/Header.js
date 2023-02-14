import React from "react"
import { Link } from "react-router-dom"


export default function MainHeader() {

    return (
            <div className="header">
                  <h2>YiYoo</h2>
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