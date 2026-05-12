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
            <p><a href="vikanweb.dk">vikanweb.dk</a></p>
            <p><a href="overpådenandenside.dk">overpådenandenside.dk</a></p>
            <p><a href= "retsinformation.dk">retsinformation.dk</a></p>
            <a href="nogetmednews.dk">nogetmednews.dk</a>
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
            <a href="ingn@nyhed.dk">ingn@nyhed.dk</a>
            <p><a href="tel: +4523232323">Telefone: 4523232323</a></p>
            <p><a href="fax: 123123-333">fax: 123123-333</a></p>
          </div>
             
        </footer>
    )
}