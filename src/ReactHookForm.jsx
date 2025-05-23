import React from 'react'
import { useForm } from 'react-hook-form'

export default function ReactHookForm() {

  const { register, handleSubmit, setError, formState: {errors, isSubmitting} } = useForm();

  const onSubmit = async (data) => {
    try{
      await new Promise(resolve => setTimeout(resolve, 1000));
      // throw new Error()
      console.log('FORM DATA = ', data)
    }
    catch(error){
      setError('email', {
        message: 'Email not found !'
      })
    }
  }

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('email', {
					required: 'Email is required',
					validate: (value) => {
            if(!value.includes('@')){
              return "Enter valid Email !"
            }
            return true
          },
				})}
				type='text'
				placeholder='Email'
			/>
			{errors.email && <div className='text-red-500'>{errors.email.message}</div>}

			<input
				{...register('password', {
					required: 'Password is required',
					minLength: {
            value: 5,
            message: 'Password must contain at least 5 characters !'
          },
				})}
				type='password'
				placeholder='Password'
			/>
			{errors.password && <div className='text-red-500'>{errors.password.message}</div>}
			<button disabled={isSubmitting} type='submit'>
        {isSubmitting ? 'Loading ...' : 'Submit'}
      </button>
		</form>
	);
}
