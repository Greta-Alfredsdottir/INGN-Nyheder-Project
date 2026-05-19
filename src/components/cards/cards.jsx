import React from "react";
import { Link } from 'react-router';
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
            {NyhedsCard.billeder?.url && <img className={style.billeder} src={NyhedsCard.billeder.url} alt=""/>}
            </div>
        </section>
       
    )
}