import React from "react";
import style from "./cards.module.scss";

export const ArticleCards = ({NyhedsCard}) => {
    if (!NyhedsCard) {
        return null;
    }
    const dateObj = new Date(NyhedsCard.dato);
    const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;

    return(
        <section className={style.cardContainer}>
            <div className={style.cardContent}>
            <h1 className={style.overskrift}>{NyhedsCard.overskrift}</h1>
            <p className={style.indhold}>{NyhedsCard.indhold?.text}</p>
            <p className={style.dato}>D. {date} - af {NyhedsCard.skribent}</p>
            <p><button className="minButton">Se mere</button></p>
            {NyhedsCard.billeder?.url && <img className={style.billeder} src={NyhedsCard.billeder.url} alt=""/>}
            </div>
        </section>
       
    )
}