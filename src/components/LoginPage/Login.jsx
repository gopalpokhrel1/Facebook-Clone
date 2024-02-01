import styles from '@/styles/loginPage/login.module.css'
import Link from 'next/link'

export default function Login() {
  return (
   <>
     <main className={styles.main}>
        <section className={styles.left_content}>
            <h1 className={styles.header}>facebook</h1>
            <p className={styles.paragraph}>Connect with friend and the world <br />around you on Facebook</p>
        </section>

        <section className={styles.right_content}>
            <form action="" className={styles.form}>
                <section>
                <input type="text" placeholder='Email and Phone number' className={styles.input}/>
                </section>
                <section>
                <input type="password" placeholder='Password' className={styles.input} />
                </section>
                <section>
                    <button className={styles.login}>Log In</button>
                </section>
                <section className={styles.forgot_section}>
                  <Link href='#' className={styles.forgot}>Forgot password?</Link>
                </section>
                <section>
                    <hr className={styles.line}/>
                </section>

                <section>
                    <button className={styles.create}>Create new account</button>
                </section>

               
                
                
            </form>

            <section className={styles.last_portion}>
                <Link href='#' className={styles.last_link}>Create a page</Link>
                <p className={styles.last_paragraph}>for a celebrity, brand and business</p>
            </section>
        </section>

     </main>
   </>
  )
}

