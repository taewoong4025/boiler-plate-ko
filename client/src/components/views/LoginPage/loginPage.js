import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action';
import {useNavigate} from 'react-router-dom';


function LoginPage() {
  let navigate = useNavigate();
  const dispacth = useDispatch();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHadler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    //refresh 방지
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }


    dispacth(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
       navigate('/')
        } else {
          alert('Error~')
        }
      })

  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHadler} />
        <br />
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
