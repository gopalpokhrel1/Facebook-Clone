import styles from '@/styles/sidebar/sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Sidebar() {
  return (
   <>
   <section className={styles.container}>
    <section className={styles.main}>

            <section className={styles.content}>
                <section className={styles.title}>
                    <section className={styles.title_img}>

                    </section>
                    <h1 className={styles.title}>Gopal pokhrel</h1>
                </section>
                 
                 <Link href='#' className={styles.link}>
                    <Image src='/friend.png' alt='hello'  width={30} height={30} />
                    <p className={styles.sidebar_list}>Friends</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/memorize.webp' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Memorizes</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/saved.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Saved</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/group.jpg' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Groups</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/video.jpg' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Video</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/marketplace.jpg' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Marketplace</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/feed.webp' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Feed</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 <Link href='#' className={styles.link}>
                    <Image src='/events.png' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>Events</p>
                 </Link>
                 {/* <section>
                    <Image src='hello' alt='hello'  width = {30} height = {30} />
                    <p className={styles.sidebar_list}>see more</p>
                 </section> */}



            </section>
      
    </section>
    </section>
    </>
  )
}
