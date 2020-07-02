import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export const name = '만렙을 찍을 수 없는 이유';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={name} />
        <meta property="og:image" content="/thumbnail.png" />
        <meta name="og:title" content={name} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1>{name}</h1>
        </Link>
      </header>

      <Head>
        <title>{name}</title>
      </Head>
      <section>
        <main>{children}</main>
      </section>
    </div>
  );
}
