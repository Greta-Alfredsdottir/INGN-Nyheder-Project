import React from "react";
import style from "./cards.module.scss";

export const ArticleCards = ({NyhedsCard}) => {
    if (!NyhedsCard) {
        return null;
    }

    return(
        <section className={style.cardContainer}>
            <div className={style.cardContent}>
            <h1 className={style.overskrift}>{NyhedsCard.overskrift}</h1>
            <p className={style.indhold}>{NyhedsCard.indhold?.text}</p>
            <p className={style.dato}>{NyhedsCard.dato}</p>
            <p className={style.skribent}>{NyhedsCard.skribent}</p>
            {NyhedsCard.billeder?.url && <img className={style.billeder} src={NyhedsCard.billeder.url} alt=""/>}

            </div>
        </section>
       
    )
}