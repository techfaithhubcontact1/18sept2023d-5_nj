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
      <header>Header Component</header>
      <main>
        <aside>Aside Component</aside> 
        <section>Section Component</section>
      </main>

      <footer>Footer Component</footer>
    </div>
  )
}
//3.Eport Area
export default Home;
