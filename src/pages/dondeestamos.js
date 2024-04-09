import* as  React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const DondeEstamos = ()=>{
    
    return(
        <Layout pageTitle="¿Dónde estamos?">
        <p>Estamos en Aranjuez.</p>
        </Layout>
    )
}
export const Head = () => <Seo title="¿Dónde estamos?" />
export default DondeEstamos