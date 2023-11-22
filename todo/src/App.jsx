import './styles.css'

export default function App() {
  return  (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input id='item' type='text' />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1>Todo List</h1>
      <ul>
        <li>
          <label>
            <input type='checkbox' />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  )
}
