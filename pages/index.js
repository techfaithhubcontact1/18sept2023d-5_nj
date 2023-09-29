//1. Import Area
import Head from 'next/head'
//import something from some libary/location
// import styles from '../styles/Home.module.css'

// Fuctinon defination Area
 function Home() {
  return (
    <div>
      <Head>
        <title>My First Nxt application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header Component <h4>980*170</h4></header>
      <main>
        <aside>Aside Component <h4>27*450</h4></aside> 
        <section>Section Component <h4>690*450</h4></section>
      </main>

      <footer>Footer Component <h4>980*70</h4></footer>
    </div>
  )
}
//3.Eport Area
export default Home;
