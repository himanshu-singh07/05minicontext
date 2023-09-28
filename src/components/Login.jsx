/* eslint-disable no-unused-vars */
import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div className='bg-cyan-900 rounded-2xl  '>
        <h2 className='text-2xl text-white mb-2 font-semibold'>Login</h2>
        <input 
            type="text" 
            placeholder='username' 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}
            className='rounded-xl p-2'
         />
         <br />
        <input className='mt-2 rounded-xl p-2'
            type="password"  
            placeholder='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <button className='bg-teal-500 m-2 p-1 rounded-xl text-white font-semibold' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login