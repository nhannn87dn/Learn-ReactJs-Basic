import React from 'react'
import Header from '../components/layouts/Header'
import Main from '../components/layouts/Main'
import Footer from '../components/layouts/Footer'

const LoginPage = () => {
  return (
    <>
    <Header />
       <Main>
        <div className="login_wrapper">
                <form action="">
                    <h2>Login</h2>
                    <input placeholder="Your Email" type="email" name="email" id="email" />
                    <input placeholder="Password" type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                </form>
                <p className="note">You don't have an account <a href="register.html">Register now</a></p>
            </div>    

       </Main>
    <Footer />
    </>
  )
}

export default LoginPage