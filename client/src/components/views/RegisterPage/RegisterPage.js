import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  let navigate = useNavigate();
  const dispacth = useDispatch();
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHadler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onNameHadler = (event) => {
    setName(event.currentTarget.value)
  }
  const onConfirmPasswordHadler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    //refresh 방지
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
      email: Email,
      password: Password,
      name: Name
    }

    dispacth(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          navigate('/login')
        } else {
          alert('Failed to sign up')
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

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHadler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHadler} />

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHadler} />

        <br />
        <button type="submit">
          회원 가입
        </button>
      </form>
    </div>
  )
}

export default RegisterPage