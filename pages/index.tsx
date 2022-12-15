import Head from 'next/head'
import Image from 'next/image'
import HeadComponent from '../components/head/head.component'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent/>

      
    </div>
  )
}
