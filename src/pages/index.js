import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
 return (
   <Layout pageTitle='Mi página de inicio'>
    <p>Vivo en Colmenar de Oreja, trabajo en Aranjuez y soy taekwondista con mi Club Deportivo Elemental Taekwondo Villaverde en Villaverde Alto. Todo en Madrid, España.</p>
    <StaticImage
       alt="Exterior del palacio real de aranjuez"
       src="../images/descarga(6).jpg"
     />

   </Layout>
 )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>
// Step 3: Export your component
export default IndexPage


