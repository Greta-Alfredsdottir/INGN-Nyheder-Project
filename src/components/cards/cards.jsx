import React from "react";
import style from "./cards.module.scss";
import { NyhedsCards } from "../../utils/nyhedscard"

export const ArticleCards = (Nyhedscards) => {

    return(
        <section className={style.cardContainer}>
            <div className={style.cardContent}>
            <h1 className={style.overskrift}>{NyhedsCards.overskrift}</h1>
            <p className={style.indhold}>{NyhedsCards.indhold.text}</p>
            <p className={style.dato}>{NyhedsCards.dato}</p>
            <p className={style.skribent}>{NyhedsCards.skribent}</p>
            <img className={style.billeder} src={NyhedsCards.billeder.url} alt=""/>

            </div>
        </section>
       
    )
}