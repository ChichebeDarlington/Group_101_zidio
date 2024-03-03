import React, {useEffect, useState} from 'react'

const Register = () => {
    const [fullname, setFullName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className='flex justify-around items-center bg-[#ebefff]'>
            <section>
                <img src="" alt="page badge" />
            </section>

            <section className='flex flex-col items-center text-justify border-[2px solid red]'>
                <p>Please Fill out form to Register</p>
                <form action="" method="post" onSubmit={HandleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Full name</label>
                        <input type="text" name='fullname' value={fullname} onChange={(e)=>setFullName(e.target.value)} />
                    </div>
                <div className='flex flex-col'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' value={username} onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">email</label>
                    <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name='confirm_password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                </div>

                <div className=''>
                    <button type='submit'>Register</button>
                </div>
                    <p>
                        Yes i have an account, <a href="#">Login</a>
                    </p>
                </form>

            </section>

        </div>
    )
}

export default Register
