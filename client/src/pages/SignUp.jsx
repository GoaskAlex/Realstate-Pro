import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function SignUp() {
  const [formData, setFormData]=useState({})
  const [error, setError]=useState(null)
  const [loading, setLoading]=useState(false)
  const navigate = useNavigate()
  const handleChange = function(e){
     setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value
      }
    )
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try {
    setLoading(true)
    setError(null)
    const res= await fetch('/server/auth/signup', 
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)
    })
    const data= await res.json()
    if(data.success === false){
      setLoading(false)
      setError('User with that Login Exists')
      return
    }
    if(res.ok){
      navigate('/sign-in')
    }
    
  } catch (error) {
    setLoading(false)
    console.log(data);
    
  }
  }


  console.log(formData);
  return (
    <>
     <div className="p-3 max-w-96 mx-auto">
        <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type='text' placeholder='Username' className='border p-3 rounded-lg'required onChange={handleChange} id='username'/>
          <input type='email' placeholder='@Email' className='border p-3 rounded-lg'required onChange={handleChange} id='email'/>
          <input type='password' placeholder='Password' className='border p-3 rounded-lg'required onChange={handleChange} id='password'/>
          <button disabled={loading} className='bg-slate-700 rounded-md p-2 uppercase hover:opacity-90 disabled:opacity-60'>
            <h1 className='text-mg font-medium text-slate-100'>
            {loading ? 'Loading...' : 'Sign Up'}
            </h1>
          </button>
          <button className='bg-gradient-to-r from-yellow-400 to-red-500 rounded-md p-2 uppercase hover:opacity-90 disabled:opacity-60'>
            <h1 className='text-md font-normal text-slate-100'>Continue With Google</h1>
          </button>
        </form>
        <div className="flex gap-2 mt-4 font-medium text-sm">
          <p>Have an account?</p>
          <Link to = "/sign-in">
            <span className='text-blue-500 hover:text-opacity-85'>Sign in</span>
          </Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div> 
    </>
  )
}
