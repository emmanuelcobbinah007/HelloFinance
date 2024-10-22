import React from 'react'

const Expenses = () => {
  return (
    <div className='grid grid-cols-3 max-w-[1240px] mx-auto'>
      <div className='col-span-2 border-r border-r-gray-200 h-screen p-6'>

      </div>
      <div className='flex flex-col my-8 pr-4 pl-8'>
        <h1 className='font-bold text-xl pt-3 pb-3 text-center text-[#009688]'>Add Expense</h1>
        <div>
        <form>
          <input className='rounded-md p-3 w-full text-black bg-white block my-3' type="text" placeholder='Description' />
          <input className='rounded-md p-3 w-full text-black bg-white block my-5' type="number" placeholder='Amount (GHS)' />
          <label for='category'  className='inline pr-4 m-10 font-bold'>Category:</label>
          <select id='category' name="Category" >
            <option value="utilities">Utilities</option>
            <option value="food">Food</option>
            <option value="mics">Miscellenous</option>
          </select>
          <button className='block w-[250px] bg-[#263238] text-[#F5F5F5] text-lg rounded-lg mx-auto my-6 py-1 font-bold hover:bg-[#009688] duration-300'>Add+</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Expenses