import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lectur</title>
        <meta
          name='description'
          content='Encuentra tu siguiente libro favorito.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.tagline}>
        <p>
          Encuentra tu siguiente <br /> libro favorito
        </p>
        <p>
          Y alguien con quién <br /> compartirlo.
        </p>
      </div>
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <p>ⓒ 2022</p>
      </footer>
    </>
  );
}
