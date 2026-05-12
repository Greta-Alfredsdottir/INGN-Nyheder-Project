import style from "./bodyCard.module.scss"
import { useGraphQuery } from "../../utils/hook";
import { Query } from "../../utils/Query";
import {ArticleCards} from "../cards/cards"

export const BodyCard = () => {
    const {data, isLoading, error} = useGraphQuery(Query);
    const NyhedsCards = data?.nyhedscards ?? [];
    if (isLoading){
        return <div>Indlæser Nyheder</div>;
    }
    if (error) {
        return <div>Fejl ved indlæsning {error.message}</div>
    }
    


    return(
        <section className={style.gamlekrop}>
            {NyhedsCards.map((nyhedscards, index) =>(
                <ArticleCards key={`${nyhedscards.overskrift}-${index}`} NyhedsCard={nyhedscards}/>
            ))}
          
          
         
        </section>
    )
}