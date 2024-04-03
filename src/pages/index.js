import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
 return (
   <Layout pageTitle='Inicio'>
    

    <p>Vivo en Colmenar de Oreja, trabajo en ARANJUEZ y soy taekwondista con mi Club Deportivo Elemental Taekwondo Villaverde en Villaverde Alto. Todo en MADRID, ESPAÑA.</p>
    
    <StaticImage
      alt="Clifford a reddish-brown pitbull, posing on a couch and looking stoically at the camera" 

      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"


    />

    <StaticImage 
      alt="Estanque de los chinescos en aranjuez"

      src="../images/chinescos.jpg"

      width={500}
    
    />
    

   </Layout>
 )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Inicio" />
// Step 3: Export your component
export default IndexPage


