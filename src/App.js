import { useState } from 'react';
//styles
import './App.css';
// data
import { usersData } from './data/users'

function App() {
  const [ query, setQuery ] = useState("")

  return (
    <div className="app">
      <section className='form'>
        <h2>Basic Search</h2>
        <input
          className='search'
          type="text"
          placeholder='Search...'
          onChange={ e => setQuery(e.target.value)}
        />
        <ul className='list'>
          {
            usersData
              .filter(user => user.first_name.toLocaleLowerCase().includes(query))
              .map(user => (
                <li className='listItem' key={ user.id }>{ user.first_name }</li>
            ))
          }
        </ul>
      </section>
      <section className='form'>
        <h2>Multi Search</h2>
        <input
          className='search'
          type="text"
          placeholder='Search...'
          onChange={ e => setQuery(e.target.value)}
        />
        <ul className='list'>
          {
            usersData
              .filter(user => user.first_name.toLocaleLowerCase().includes(query))
              .map(user => (
                <li className='listItem' key={ user.id }>{ user.first_name }</li>
            ))
          }
        </ul>
      </section>
      <section className='form'>
        <h2>Back Search</h2>
        <input
          className='search'
          type="text"
          placeholder='Search...'
          onChange={ e => setQuery(e.target.value)}
        />
        <ul className='list'>
          {
            usersData
              .filter(user => user.first_name.toLocaleLowerCase().includes(query))
              .map(user => (
                <li className='listItem' key={ user.id }>{ user.first_name }</li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
