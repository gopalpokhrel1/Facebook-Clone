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









// ... (imports remain the same)

export default function Home() {
    const [displaySections, setDisplaySections] = useState({
      home: true,
      page: false,
      video: false,
      marketplace: false,
      groups: false,
    });
  
    const [activeSections, setActiveSections] = useState({
      home: true,
      page: false,
      video: false,
      marketplace: false,
      groups: false,
    });
  
    const setActive = (val) => {
      const updatedDisplaySections = {};
      const updatedActiveSections = {};
  
      Object.keys(displaySections).forEach((section) => {
        updatedDisplaySections[section] = section === val;
        updatedActiveSections[section] = section === val;
      });
  
      setDisplaySections(updatedDisplaySections);
      setActiveSections(updatedActiveSections);
    };
  
    return (
      <>
        <section className={styles.main}>
          <nav className={styles.nav}>
            <section className={styles.nav_left}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                width={40}
                height={40}
                alt="Photo"
              />
              <input type="text" className={styles.nav_input} placeholder="Search facebook" />
            </section>
  
            <section className={styles.nav_middle}>
              {['home', 'page', 'video', 'marketplace', 'groups'].map((section) => (
                <section
                  key={section}
                  onClick={() => setActive(section)}
                  className={`${styles[section]} ${displaySections[section] ? styles.display : ''} ${
                    activeSections[section] ? styles[`blue_${section}`] : styles.icon
                  }`}
                >
                  <Link href="#">
                    {getIconComponent(section)}
                  </Link>
                </section>
              ))}
            </section>
  
            <section className={styles.nav_right}>
              <section className={styles.menu}>
                <CgMenuGridR className={styles.icon2} />
              </section>
              <section className={styles.messenger}>
                <FaFacebookMessenger className={styles.icon2} />
              </section>
              <section className={styles.bell}>
                <FaBell className={styles.icon2} />
              </section>
              <section className={styles.photo}>
                <p className={styles.icon2}>p</p>
              </section>
            </section>
          </nav>
        </section>
      </>
    );
  }
  
  const getIconComponent = (section) => {
    switch (section) {
      case 'home':
        return <AiFillHome />;
      case 'page':
        return <PiFlag />;
      case 'video':
        return <MdOndemandVideo />;
      case 'marketplace':
        return <BsShopWindow />;
      case 'groups':
        return <HiUserGroup />;
      default:
        return null;
    }
  };
      