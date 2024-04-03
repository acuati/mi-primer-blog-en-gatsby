// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const SobreMi = () => {
 return (
  <Layout pageTitle='Sobre mí'>
  <p>Soy un taekwondista. Pero hago la paz y no la guerra.</p>

 </Layout>
 )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Sobre Mí" />
// Step 3: Export your component
export default SobreMi


