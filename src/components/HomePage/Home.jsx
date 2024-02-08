'use client'
import styles from '@/styles/HomePage/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai";
import { PiFlag } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { useState } from 'react';









export default function Home() {

    const [displayhome, setDisplayhome] = useState(true);
    const [displaypage, setDisplaypage] = useState(false);
    const [displayvideo, setDisplayvideo] = useState(false);
    const [displaymarketplace, setDisplaymarketplace] = useState(false);
    const [displaygroups, setDisplaygroups] = useState(false);
    const [home, setHome] = useState(true);
    const [page, setPage] = useState(false);
    const [video, setVideo] = useState(false);
    const [ marketplace, setMarketplace] = useState(false);
    const [groups, setGroups] = useState(false)

    const setActive=(val)=>{
       if(val == 'home'){
        setDisplayhome(true);
        setHome(true);
        setDisplaypage(false);
        setPage(false);
        setDisplayvideo(false);
        setVideo(false);
        setDisplaymarketplace(false);
        setMarketplace(false);
        setDisplaygroups(false);
        setGroups(false);
       }
      else if(val == 'page'){
        setDisplayhome(false);
        setHome(false);
        setDisplaypage(true);
        setPage(true);
        setDisplayvideo(false);
        setVideo(false);
        setDisplaymarketplace(false);
        setMarketplace(false);
        setDisplaygroups(false);
        setGroups(false);
       }
      else if(val == 'video'){
        setDisplayhome(false);
        setHome(false);
        setDisplaypage(false);
        setPage(false);
        setDisplayvideo(true);
        setVideo(true);
        setDisplaymarketplace(false);
        setMarketplace(false);
        setDisplaygroups(false);
        setGroups(false);
       }
      else if(val == 'marketplace'){
        setDisplayhome(false);
        setHome(false);
        setDisplaypage(false);
        setPage(false);
        setDisplayvideo(false);
        setVideo(false);
        setDisplaymarketplace(true);
        setMarketplace(true);
        setDisplaygroups(false);
        setGroups(false);
       }
      else if(val == 'groups'){
        setDisplayhome(false);
        setHome(false);
        setDisplaypage(false);
        setPage(false);
        setDisplayvideo(false);
        setVideo(false);
        setDisplaymarketplace(false);
        setMarketplace(false);
        setDisplaygroups(true);
        setGroups(true);
       }

    }
  return (
    <>

      <section className={styles.main}>

        <nav className={styles.nav}>
            <section className={styles.nav_left}>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png' width={40} height={40} alt='Photo'/>
                <input type="text" className={styles.nav_input} placeholder='Search facebook' />
            </section>

            <section className={styles.nav_middle}>

                <section onClick={()=> setActive('home')} className={`${styles.home} ${displayhome ? styles.display: ""}`}>
                    <Link href="#">
                       <AiFillHome className={`${home ? styles.blue_home : styles.icon}`}/>
                    </Link>
                </section>

                <section onClick={()=> setActive('page')} className={`${styles.page} ${displaypage ? styles.display: ""}`}>
                    <Link href='#'>
                        <PiFlag className={`${page ? styles.blue_page : styles.icon}`}/>
                    </Link>
                </section>

                <section onClick={()=> setActive('video')} className={`${styles.video} ${displayvideo ? styles.display: ""}`}>
                    <Link href='#'>
                    <MdOndemandVideo className={`${video ? styles.blue_video : styles.icon}`}/>
                    </Link>
                </section>

                <section onClick={()=> setActive('marketplace')} className={`${styles.marketplace} ${displaymarketplace ? styles.display: ""}`}>
                    <Link href='#'>
                    <BsShopWindow className={`${marketplace ? styles.blue_marketplace : styles.icon}`}/>
                    </Link>
                </section>

                <section onClick={()=> setActive('groups')} className={`${styles.groups} ${displaygroups ? styles.display: ""}`}>
                    <Link href='#' >
                     <HiUserGroup className={`${groups ? styles.blue_groups : styles.icon}`}/>
                    </Link>
                </section>

            </section>

            <section className={styles.nav_right}>
             <section className={styles.menu}>
                <CgMenuGridR className={styles.icon2}/>
             </section>
             <section className={styles.messenger}>
                <FaFacebookMessenger className={styles.icon2}/>
             </section>

             <section className={styles.bell}>
              <FaBell className={styles.icon2}/>
             </section>

             <section className={styles.photo}>
                <p className={styles.icon2}>p</p>
                
             </section>
            </section>
        </nav>

        </section>
      
    </>
  )
}
