import React from "react";
import { Link } from 'react-router';
import style from "./cards.module.scss";

export const ArticleCards = ({item}) => {
    if (!item) {
        return null;
    }
    //Laver datoen om til et JavaScript Date-objekt.
    const dateObj = new Date(item.dato); 
    //getMonth() starter fra 0, derfor +1.
    const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;

    return(
        <section className={style.cardContainer}>
            <div className={style.cardContent}>
            <Link to={`/artikel/${item.slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <h1 className={style.overskrift}>{item.overskrift}</h1>
            </Link>
            <p className={style.indhold}>{item.indhold?.text}</p>
            <p className={style.dato}>D. {date} - af {item.skribent}</p>
            <p>
                <Link to={`/artikel/${item.slug || item.id}`}>
                    <button className="minButton">Se mere</button>
                </Link>
            </p>
            </div>
            {item.billeder?.url && <img className={style.billeder} src={item.billeder.url} alt=""/>}
        </section>
       
    )
}