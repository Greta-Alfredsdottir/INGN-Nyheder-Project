// lavet med hjælp af copilot
import { useParams } from 'react-router'
import { useGraphQuery } from '../utils/hook'
import { Query } from '../utils/Query'

export function Artikel(){
  const { slug } = useParams()
  const { data, isLoading, error } = useGraphQuery(Query)
  
  if (isLoading) return <div>Indlæser artikel...</div>
  if (error) return <div>Fejl: {error.message}</div>
  
  // Finder artikel ved slug eller id
  const artikel = data?.nyhedscards?.find(item => item.slug === slug || item.id === slug)
  
  if (!artikel) return <h2>Artikel ikke fundet</h2>
  
  const dateObj = new Date(artikel.dato)
  const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`
  
  return(
    <article>
      <h1>{artikel.overskrift}</h1>
      {artikel.billeder?.url && <img src={artikel.billeder.url} alt={artikel.overskrift}/>}
      <p><strong>D. {date} - af {artikel.skribent}</strong></p>
      <p>{artikel.indhold?.text}</p>
    </article>
  )
}
