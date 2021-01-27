import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao meu Mundo!
        </h1>

        <p className={styles.description}>
          Dica: Começe pelo Proffy{' '}
          <code className={styles.code}>proffy/details</code>
        </p>

        <div className={styles.grid}>
          <a href="/proffy" className={styles.card}>
            <h3>Proffy &rarr;</h3>
            <p>Uma aplicação que conecta quem deseja aprender, com quem quer ensinar.</p>
          </a>

          <a href="/ecoleta" className={styles.card}>
            <h3>Ecoleta &rarr;</h3>
            <p>O Ecoleta ajuda pessoas a encontrarem pontos de coleta para reciclagem.</p>
          </a>

          <a
            href="/bethehero"
            className={styles.card}
          >
            <h3>Be The Hero &rarr;</h3>
            <p>Visa conectar pessoas que desejam fazer contribuições monetárias a ONG's que precisam de ajuda.</p>
          </a>

          <a
            href="/happy"
            className={styles.card}
          >
            <h3>Happy &rarr;</h3>
            <p>
              Conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz 💜.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
