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

      <main className={styles.main}>
        <section>
          <div className={styles.fullspan}>
            <div className={styles.tagline}>
              <p>
                Encuentra tu siguiente <br /> libro favorito
              </p>
              <p>
                Y alguien con quién <br /> compartirlo.
              </p>
            </div>
          </div>
        </section>
        <section>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor='email'>¡Únete!</label>
            <input id='email' type='email' placeholder='correo'></input>
            <button>Enviar</button>
          </form>
        </section>

        <section>
          <div className={styles.fullspan}>
            <h2>Registra tus lecturas</h2>
          </div>
        </section>
        <section>
          <div className={styles.fullspan}>
            <h2>Comparte y lee con otras personas</h2>
          </div>
        </section>
        <section>
          <div className={styles.fullspan}>
            <h2>Descubre nuevas aventuras</h2>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>ⓒ 2022</p>
      </footer>
    </>
  );
}
