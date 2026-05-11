import { gql } from "graphql-request";
// inde imellem `` er det man skal skrive i graphql, på hygraph siden i api playground
export const Query = gql `


query {
  nyhedscards {
    overskrift
    dato
    skribent 
    billeder {url}
    indhold {text}
    kategori
  }
}`