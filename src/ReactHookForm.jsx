import React from 'react'
import { useForm } from 'react-hook-form'

export default function ReactHookForm() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('FORM DATA = ', data)
  }

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('email')} type='email' placeholder='Email' />
			<input {...register('password')} type='password' placeholder='Password' />
      <button type='submit'>Submit</button>
		</form>
	);
}
