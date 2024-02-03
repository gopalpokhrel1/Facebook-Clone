"use client";
import styles from "@/styles/loginPage/signup.module.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function Signup({closeSignup}) {

  
  const date = [];
  const year = [];
  for (let i = 1; i <= 31; i++) {
    date.push(i);
  }
  for (let i = 1905; i <= 2024; i++) {
    year.push(i);
  }
  const[id, setId] = useState();
  const [firstname, setFirstname]= useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [day, setDay] = useState();
  const [yrs, setYrs] = useState();
  const [month, setMonth] = useState('');
  const [gender, setGender] = useState('');


  const [custom, setCustom] = useState(false);

  const handleCustom = (val)=>{
    if(val == 'custom'){
        setCustom(true);
        setGender(val)
    }
    else{
        setCustom(false);
        setGender(val);
    }
  }


  
  const onSubmit= async (e)=>{
    e.preventDefault()

    console.log({firstname,lastname,id,password,day,month,yrs,gender})
  
    const url = 'http://localhost:3000/api/login';

    let response = await fetch(url, {method:'POST',
     body:JSON.stringify({firstname,lastname,id,password,day,month,yrs,gender
    }),headers:{
      'Content-Type': 'application/json'
    }})

   const data= await response.json();

    if(data.status == true){
      alert("inserted");
    }
  
  }


  return (
    <>
    <section className={styles.container}>
      <section className={styles.signup_main}>
        <section className={styles.header}>
          <section>
            <h1 className={styles.signup_header}>Sign Up</h1>
            <p className={styles.signup_para}>It's quick and easy</p>
          </section>
          <section >
            <FaXmark size={25} style={{cursor:'pointer'}} onClick={closeSignup} />
          </section>
        </section>

        <hr />

        <form  className={styles.form}>
          <section className={styles.fullname}>
            <input
              type="text"
              placeholder="First name"
              className={styles.name}
              onChange={(e)=> setFirstname(e.target.value)}
              required
      
            />
            <input
              type="text"
              placeholder="Last name"
              className={styles.name}
              onChange={(e)=> setLastname(e.target.value)}
              required
              name="lastname"
            />
          </section>
          <input
            type="text"
            placeholder="Mobile number or email"
            className={styles.id}
            onChange={(e)=> setId(e.target.value)}
            required
            name="id"
          />
          <input
            type="text"
            placeholder="New Password"
            className={styles.password}
            onChange={(e)=> setPassword(e.target.value)}
            required
            name="password"
          />
          <section className={styles.birthday}>
            <p>
              Birthday <span className={styles.question_mark}>?</span>
            </p>
            <section className={styles.date_content}>
              <select
                name="month"
                id="month"
                onChange={(e) => setMonth(e.target.value)}

                className={styles.date}
                required
              >
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>

              <select name="day" id="" onChange={(e) => setDay(e.target.value)} className={styles.date} required>
                {date.map((val) => {
                  return <option value={val}>{val}</option>;
                })}
              </select>

              <select name="yrs" id="" onChange={(e) => setYrs(e.target.value)} className={styles.date} required>
                {year.map((val) => {
                  return <option value={val}>{val}</option>;
                })}
              </select>
            </section>
          </section>

          <section className={styles.gender}>
            <p className={styles.gender_header}>
              Gender <span>?</span>
            </p>
            <section>
              <section className={styles.gender_content}>
                <section className={styles.sex} >
                  Male <input type="radio" name="gender" value="male"  onChange={(e)=> handleCustom(e.target.value)} required/>
                </section>

                <section className={styles.sex} >
                  Female <input type="radio" name="gender" value="female" onChange={(e)=> handleCustom(e.target.value)} required/>
                </section>
                <section className={styles.sex} >
                  custom <input type="radio" name="gender" value="custom" onChange={(e)=> handleCustom(e.target.value)} />
                </section>
              </section>
              {
                 custom ? <>
                 <select name="" id="" className={styles.custom}>
                    <option value="" selected disabled>selct your pronoun</option>
                    <option value="">She: "Wish her a happy birthday!"</option>
                    <option value="">He: "Wish him a happy birthday!"</option>
                    <option value="">They: "Wish them a happy birthday"</option>
                 </select>
                 </> : ""

                
              }

              
            </section>
          </section>

          <button onClick={onSubmit} className={styles.signup_button}>Sign Up</button>
        </form>
      </section>
      </section>
    </>
  );
}
