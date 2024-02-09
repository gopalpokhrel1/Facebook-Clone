import Home from "@/components/HomePage/Home";
import Sidebar from "@/components/sidebar/Sidebar";
import Story from "@/components/story/Story";
import styles from '../page.module.css'
import Rightsidebar from "@/components/sidebar/Rightsidebar";


export default async function page({params}) {
  const id = +params.id;

  let  response = await fetch('http://localhost:3000/api/login', {method:"GET"});
  response = await response.json();

   const data = await response.find(p => p.id == id);




  return (
    <div style={{width:'100%', backgroundColor:'#18191a'}}>
     <Home/>
      <section className={styles.flex}>
      <Sidebar/>
     <Story/>
     <Rightsidebar/>
      </section>
    </div>
  )
}
