import Head from 'next/head';
import Image from 'next/image';
import BookRow from '../components/bookRow';
import BookShelf from '../components/bookShelf';
import ReadingClub from '../components/readingClub';
import profilePic from '../public/girl-reading.png';
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
            <p style={{ fontSize: '.7rem' }}>*pre-registro</p>
          </form>
        </section>

        <section>
          <div className={styles.fullspan}>
            <h2>Registra tus lecturas</h2>
            <div className={styles.readingRecord}>
              <Image src={profilePic} alt='' width={80} height={80} />
              <div>
                <p style={{ marginBottom: '.5rem' }}>10/25</p>
                <BookRow qty={27} scale={1} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.fullspan}>
            <h2>Comparte y lee con otras personas</h2>
            <ReadingClub />
          </div>
        </section>
        <section>
          <div className={styles.fullspan}>
            <h2>Descubre nuevas aventuras</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <BookShelf qty={27} scale={2} />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>ⓒ 2022</p>
      </footer>
    </>
  );
}
