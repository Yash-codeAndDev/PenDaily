import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
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
            <form className='flex flex-col gap-4' >
              <div className=''>
                <Label value='Your Username' />
                <TextInput 
                  type='text'
                  placeholder='Username'
                  id="username"
                />
              </div>
              <div className=''>
                <Label value='Your email' />
                <TextInput 
                  type='text'
                  placeholder='abc@xyz.com'
                  id="email"
                />
              </div>
              <div className=''>
                <Label value='Your password' />
                <TextInput 
                  type='text'
                  placeholder='Password'
                  id="password"
                />
              </div>

              <Button gradientDuoTone='purpleToPink' type='submit' outline>
                Sign Up
              </Button>
            </form>

            <div className='flex items-center justify-center gap-2 mt-5 text-sm'>
                <span>Have an Account ?</span>
                <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
            </div>

        </div>
      
      
      </div>
    </div>
  )
}
