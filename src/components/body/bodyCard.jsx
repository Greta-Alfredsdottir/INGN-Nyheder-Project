//Lavet med hjælp af copilot og ældre opgaver
import style from "./bodyCard.module.scss"
import { useGraphQuery } from "../../utils/hook";
import { Query } from "../../utils/Query";
import {ArticleCards} from "../cards/cards"

export const BodyCard = ({ kategori }) => {
    const {data, isLoading, error} = useGraphQuery(Query);
    let NyhedsCards = data?.nyhedscards ?? [];
    
    // Filtrer efter kategori hvis givet
    if (kategori) {
        NyhedsCards = NyhedsCards.filter(artikel => artikel.kategori === kategori);
    }
    
    if (isLoading){
        return <div>Indlæser Nyheder</div>;
    } // Her kommer der fejl melding hvis den ikke finder noget
    if (error) {
        return <div>Fejl ved indlæsning {error.message}</div>
    }
    // Her kommer der besked, hvis der er fejl
    if (NyhedsCards.length === 0) {
        return <div>Ingen artikler fundet</div>;
    }

    return(
        <section className={style.gamlekrop}>
            {NyhedsCards.map((nyhedscards, index) =>(
                <ArticleCards key={`${nyhedscards.overskrift}-${index}`} NyhedsCard={nyhedscards}/>
            ))}
          
          
         
        </section>
    )
}