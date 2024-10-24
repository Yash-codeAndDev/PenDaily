import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'



import { HiInformationCircle } from "react-icons/hi";


export default function Signup() 
{
  const [formData, setFormData] = useState({});
  const [errorMesssage,setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
  };

  // console.log(formData)

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      // if fields are empty
      if(!formData.username || !formData.email || !formData.password){
          return setErrorMessage('Please fill all fields')
      }

        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        
        if(data.success === false){
          return setErrorMessage(data.message);
        }
        setLoading(false)
        if(res.ok){
          navigate('/sign-in')
        }
    } catch (error) {
        setErrorMessage(error.message)
        setLoading(false)
    }
  }


  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col max-w-3xl gap-5 p-3 mx-auto md:flex-row md:items-center'>

        <div className='flex-1'>
          
          <Link to='/' className='text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>DailyPen</span>
          </Link>

          <p className='mt-5 text-sm'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sit nulla cubilia eleifend laoreet sagittis hendrerit. Cursus nullam facilisi aenean id tellus amet pharetra tortor.
          </p>
        </div>



        <div className='flex-1'>
            <form className='flex flex-col gap-4'  onSubmit={handleSubmit}>
              <div className=''>
                <Label value='Your Username' />
                <TextInput 
                  type='text'
                  placeholder='Username'
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div className=''>
                <Label value='Your email' />
                <TextInput 
                  type='email'
                  placeholder='abc@xyz.com'
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className=''>
                <Label value='Your password' />
                <TextInput 
                  type='password'
                  placeholder='Password'
                  id="password"
                  onChange={handleChange}
                />
              </div>

              <Button gradientDuoTone='purpleToPink' type='submit' outline disabled={loading}>
                {
                  loading ? (
                    <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                    </>
                  ) : 'Sign Up'
                }
              </Button>
            </form>

            <div className='flex items-center justify-center gap-2 mt-5 text-sm'>
                <span>Have an Account ?</span>
                <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
            </div>

            {
              errorMesssage && (
                <Alert className='items-center mt-5 italic rounded-lg' color='failure' icon={HiInformationCircle} >
                  {errorMesssage}
                </Alert>
              )
            }

        </div>

      </div>
    </div>
  )
}
