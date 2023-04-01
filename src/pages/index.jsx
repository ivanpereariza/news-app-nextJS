import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageLayout title='News APP - Home'>
      <div className={styles.container}>
        <h1>Aprendiendo NextJS</h1>
        <Link href={'/article'}>Articulos</Link>
        <Link href={'/about'}>Sobre mi</Link>
      </div>
    </PageLayout>
  )
}
