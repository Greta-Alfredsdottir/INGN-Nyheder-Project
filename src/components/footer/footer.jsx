import style from "./footer.module.scss"


export function Footer(){

    return(
        <footer className={style.footer}>
          <div>
            <p>Adresse:</p>
            <p>Intet nyt - Godt nyt ApS</p>
            <p>Tulipanvej 232 <br/>
                7320 <br/>
                Valby Øster
            </p>
          </div>
          <div>
            <p>Links</p>
            <p>vikanweb.dk</p>
            <p>overpådenandenside.dk</p>
            <p>retsinformation.dk</p>
            <p>nogetmednews.dk</p>
          </div>
          <div>
            <p>Politik</p>
            <p>Privatlivspolitik</p>
            <p>Cookiepolitik</p>
            <p>Købsinformation</p>
            <p>Delingspolitik</p>
          </div>
          <div>
            <p>Kontakt</p>
            <p>ingn@nyhed.dk</p>
            <p>Telefone: 23232323</p>
            <p>fax: 123123-333</p>
          </div>
             
        </footer>
    )
}