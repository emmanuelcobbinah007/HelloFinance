import React from 'react'

const Expenses = () => {
  return (
    <div>
      <div>

      </div>
      <div>
        <h1>Add Expense</h1>
        <div>
        <form>
          <input className='bg-white block' type="text" placeholder='Description' />
          <input className='bg-white vlock' type="number" placeholder='Amount' />
          <p className='inline'>Category:</p>
          <select name="Category" id="">
            <option value="utilities">Utilities</option>
            <option value="food">Food</option>
            <option value="mics">Miscellenous</option>
          </select>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Expenses