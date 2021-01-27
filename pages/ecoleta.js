import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Ecoleta() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecoleta</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ecoleta
        </h1>

        <p className={styles.description}>
          O Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.
        </p>

        <div className={styles.grid}>
          <a href="https://ecoleta-web-iota.vercel.app/" className={styles.card}>
            <h3>Site &rarr;</h3>
            <p>Siga para acessar o site da aplicação.</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Aplicativo &rarr;</h3>
            <p>Acesse aqui para realizar o download do app</p>
          </a>
        </div>

        <div className={styles.details}>
          <img src="https://raw.githubusercontent.com/rocketseat-education/nlw-01-omnistack/master/.github/ecoleta.png" alt=""/>
        </div>
      </main>
    </div>
  )
}
