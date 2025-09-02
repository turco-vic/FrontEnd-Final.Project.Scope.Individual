import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Bem-vindo ao Site Crisma</h1>

      <Link href="/lista">Ir para a lista de itens</Link>
    </div>
  );
}