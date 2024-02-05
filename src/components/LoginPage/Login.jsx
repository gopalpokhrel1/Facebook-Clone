"use client";
import styles from "@/styles/loginPage/login.module.css";
import Link from "next/link";
import Signup from "@/components/LoginPage/Signup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default  function Login() {
const router = useRouter();  
  const [display, setDisplay] = useState(false);
  const [formdata, setFormdata] = useState({
    id:'' ,
    password:""
  })

  const [data, setData] = useState([]);

 const func = async ()=>{
  try{
    const url = 'http://localhost:3000/api/login';
    let file = await fetch(url, {method:"GET"});
    file = await file.json();
    setData(file)
  }
  catch(err){
  (err)=> alert(err);
  }
 }

 useEffect(()=>{
  func();
 },[]);

 


 


  const closeSignup = () => {
    setDisplay(false);
  };



  const handleInputValue = (e)=>{
    const {name, value} = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    })
    
  }



  const handleSubmit = (e)=>{
    e.preventDefault();

    const id = +formdata.id;
    const password = formdata.password;

    const user = data.find(p => p.id === id);
    if(user){
        if( user.password === password){
            router.push(`/${id}`);
        }
        else{
            alert('Not found');
        }

    }

    else{
        alert('user is not validate please create new account');
        setDisplay(true);
    }

   
  
    
  }

  return (
    <>
      <main className={styles.main}>
        <section className={styles.left_content}>
          <h1 className={styles.header}>facebook</h1>
          <p className={styles.paragraph}>
            Connect with friend and the world <br />
            around you on Facebook
          </p>
        </section>

        <section className={styles.right_content}>
          <section className={styles.formcontainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <section>
                <input
                  type="text"
                  name="id"
                  value={formdata.id}
                  onChange={handleInputValue}
                  placeholder="Email and Phone number"
                  className={styles.input}
                />
              </section>
              <section>
                <input
                  type="password"
                  name="password"
                  value={formdata.password}
                  onChange={handleInputValue}
                  placeholder="Password"
                  className={styles.input}
                />
              </section>
              <section>
                <button  className={styles.login}>Log In</button>
              </section>
              <section className={styles.forgot_section}>
                <Link href="" className={styles.forgot}>
                  Forgot password?
                </Link>
              </section>
              <section>
                <hr className={styles.line} />
              </section>

              <section>
                <button
                  className={styles.create}
                  onClick={(e) => {
                    e.preventDefault()
                    setDisplay(true)
                  }}
                >
                  Create new account
                </button>
              </section>
            </form>
          </section>

          <section className={styles.last_portion}>
            <Link href="" className={styles.last_link}>
              Create a page
            </Link>
            <p className={styles.last_paragraph}>
              for a celebrity, brand and business
            </p>
          </section>
        </section>
      </main>
      <div>{display && <Signup closeSignup={closeSignup} />}</div>
    </>
  );
}
