import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lectur</title>
        <meta
          name='description'
          content='Encuentra tu siguiente libro favorito.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          Encuentra tu siguiente libro favorito <br />Y alguien con quién
          compartirlo.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>ⓒ 2022</p>
      </footer>
    </div>
  );
}
