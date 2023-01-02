import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  
  const handleLoginToggle = () => {
    setIsLogin(prev => !prev);
  }

  return (
    <div className='login'>
        <div className="login-wrapper">
            <div className="left">
                <h1>Reactbook</h1>
                <p>Connect with your friends and the world around you on Reactbook.</p>
            </div>
            <div className="right">
                <div className="form-card">
                    <div className="form-wrapper">
                        <form>
                            {
                                !isLogin ?
                                (<input 
                                    type="text"
                                    placeholder='Name'
                                />):
                                null
                            }
                            
                            <input 
                                type="email" 
                                name="email"
                                placeholder='Email'
                            />
                            <input 
                                type="password" 
                                name="password"
                                placeholder='Password'
                            />
                            {
                                !isLogin ?
                                (<input 
                                    type="password" 
                                    name="newpassword"
                                    placeholder='Password again'
                                />):
                                null
                            }
                            
                            <button className='login-btn'>{isLogin ? "Login": "Sign Up"}</button>
                        </form>
                        {
                            isLogin ?
                            (
                                <a href="#">Forgot Password</a>
                            ):
                            null
                        }
                        <button 
                            className='register-btn'
                            onClick={handleLoginToggle}
                        >
                            {isLogin ? "Create New Account": "Log into account"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login