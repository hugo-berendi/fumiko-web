import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fumiko Web</title>
        <meta name="description" content="Website for the discord bot Fumiko." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.name}>Fumiko</h1>
        <div className={styles.line}></div>
        <div className={styles.parts}>
          <div className={styles.part1}>
            <h2 className={styles.partHeader}>Description</h2>
            <p className={styles.description}>Fumiko is an upcoming all-in-one discord bot. It is made for big and small discord servers.</p>
          </div>
          <div className={styles.part2}>
            <h2 className={styles.partHeader}>Features</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Moderation</li>
              <li className={styles.listItem}>Games</li>
              <li className={styles.listItem}>...</li>
            </ul>
          </div>
          <div className={styles.part3}>
            <h2 className={styles.partHeader}>Try it yourself</h2>
            <a className={styles.link} 
            aria-disabled='true' 
            href='https://discord.com/api/oauth2/authorize?client_id=829257090673279006&permissions=1632389037303&scope=bot%20applications.commands'
            >Invite</a>
          </div>
        </div>
      </main>
    </div>
  )
}
