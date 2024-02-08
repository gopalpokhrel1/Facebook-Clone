import styles from "@/styles/main/main.module.css";
import Image from "next/image";
import { RiLiveFill } from "react-icons/ri";
import { TbPhotoVideo } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { AiTwotoneLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";




export default function Scroll() {
  return (
    <section className={styles.main}>
      <section className={styles.create}>
        <section className={styles.top}>
          <Image
            src=""
            width={50}
            height={50}
            alt="photo"
            className={styles.img}
          />
          <button className={styles.btn}>{`What's on your mind, `}</button>
        </section>
        <hr />
        <section className={styles.bottom}>
          <section className={styles.icon}>
            <RiLiveFill size={27} style={{ color: "red" }} />
            <p>Live Video</p>
          </section>
          <section className={styles.icon}>
            <TbPhotoVideo size={27} style={{ color: "green" }} />
            <p>Photo/video</p>
          </section>
          <section className={styles.icon}>
            <IoMdHappy size={27} style={{ color: "yellow" }} />
            <p>Feeling/activity</p>
          </section>
        </section>
      </section>

      <Post />
    </section>
  );
}

const Post = () => {
  return (
    <>
      <section className={styles.post}>
        <section className={styles.post_header}>
          <section className={styles.post_top}>
            <Image
              src=""
              width={50}
              height={50}
              alt="photo"
              style={{ borderRadius: "2rem" }}
            />
            <h1 className={styles.post_header_content}>Gopal</h1>
          </section>
          <section className={styles.post_bottom}>
            <BsThreeDots size={30}  className={styles.post_icon}/>
            <FaXmark size={30} className={styles.post_icon1} />
          </section>
        </section>
        <p className={styles.post_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          tempore.
        </p>
        <section>
          <Image src="" className={styles.post_image} />
        </section>
        <section className={styles.react}>
         <section>
         <AiTwotoneLike style={{color:'blue'} } size={20}/>
          <FaHeart style={{color:'red'}} size={20}/>
         </section>

          <FaComment style={{color:'#a8abaf'}}/>
        </section>
      </section>
    </>
  );
};
