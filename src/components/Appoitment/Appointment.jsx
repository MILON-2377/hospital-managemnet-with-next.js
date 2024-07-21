import React from 'react'

export default function AppointmentForm() {
  return (
    <div>
      
      <form >
        <label>
          <span className='text-xl'>Full Name</span>
          <input
          className='px-3 py-1 rounded-md focus:outline-none border-gray-200 ' 
          type="text" />
        </label>
      </form>
    </div>
  )
}
