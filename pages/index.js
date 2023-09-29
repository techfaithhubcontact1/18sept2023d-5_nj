//1. Import Area
import Head from 'next/head'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Aside from './Components/Aside';
import Section from './Components/Section';
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

      <Header />

      <main>
        <Aside />
        <Section />
      </main>

      <Footer />
    </div>
  )
}
//3.Eport Area
export default Home;
