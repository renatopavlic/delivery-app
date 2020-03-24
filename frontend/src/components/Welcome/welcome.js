import React from 'react'

import style from "./welcome.css"

function Welcome() {
    return (
        <div className="welcomediv">
                <img className="mylogo" src="/images/logo.png"></img>
                <p className="welcomep">Naruči što želiš, dostavljamo ti za nekoliko minuta!</p>

            <div className="myrow">

               <button className="list_btn">
                   <img src="" className="list_img"></img>
                   <h4 className="list_text">Neki tekst</h4>
               </button>

               <button className="list_btn">
                   <img src="" className="list_img"></img>
                   <h4 className="list_text">Neki tekst</h4>
               </button>

               <button className="list_btn">
                   <img src="" className="list_img"></img>
                   <h4 className="list_text">Neki tekst</h4>
               </button>

               <button className="list_btn">
                   <img src="" className="list_img"></img>
                   <h4 className="list_text">Neki tekst</h4>
               </button>
            </div>

        </div>

    )
}

export default Welcome
