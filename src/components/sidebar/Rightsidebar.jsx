import styles from '@/styles/sidebar/rightsidebar.module.css'
import { IoMdSearch } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Image from 'next/image';



export default function Rightsidebar() {
  return (
    <div className={styles.container}>
      <section className={styles.main}>

        <section className={styles.header}>
          <h1>Contacts</h1>
          <section className={styles.flex}>
            <section className={styles.icon}>
            <IoMdSearch size={20} style={{color:'white'}}/>
            </section>
            <section className={styles.icon}>
            <BsThreeDots size={20} style={{color:'white'}}/>

            </section>
          
          </section>
        
        </section>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </section>
      
    </div>
  )
}

const Item = ()=>{
  return(
    <>
    <section className={styles.item}>
       <Image src='' width={35} height={35} alt='photo' className={styles.img}/>
       <h1 className={styles.title}>Name</h1>
    </section>
    </>
  )
}
