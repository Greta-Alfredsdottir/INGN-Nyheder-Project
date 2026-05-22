import React from "react";
import { Link } from 'react-router';
import style from "./cards.module.scss";

export const ArticleCards = ({NyhedsCard}) => {
    if (!NyhedsCard) {
        return null;
    }
    //Laver datoen om til et JavaScript Date-objekt.
    const dateObj = new Date(NyhedsCard.dato); 
    //getMonth() starter fra 0, derfor +1.
    const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;

    return(
        <section className={style.cardContainer}>
            <div className={style.cardContent}>
            <Link to={`/artikel/${NyhedsCard.slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <h1 className={style.overskrift}>{NyhedsCard.overskrift}</h1>
            </Link>
            <p className={style.indhold}>{NyhedsCard.indhold?.text}</p>
            <p className={style.dato}>D. {date} - af {NyhedsCard.skribent}</p>
            <p>
                <Link to={`/artikel/${NyhedsCard.slug || NyhedsCard.id}`}>
                    <button className="minButton">Se mere</button>
                </Link>
            </p>
            </div>
            {NyhedsCard.billeder?.url && <img className={style.billeder} src={NyhedsCard.billeder.url} alt=""/>}
        </section>
       
    )
}