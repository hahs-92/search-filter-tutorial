import { useState } from 'react';
//styles
import './App.css';
import { List } from './components/List/List';
import { Table } from './components/Table/Table'
// data
import { usersData } from './data/users'


function App() {
  const [ query, setQuery ] = useState("")
  const keys = ['first_name', 'last_name', 'email']

  const basicSearch = data => {
    return data.filter(user => user.first_name.toLocaleLowerCase().includes(query))
  }


  const multiSearch = data => {
    return data.filter( item =>
      keys.some(key => item[key]?.toLowerCase()?.includes(query))
    )
    // return data
    //   .filter(user =>
    //       user.first_name.toLocaleLowerCase().includes(query) ||
    //       user.last_name.toLocaleLowerCase().includes(query) ||
    //       user.email.toLocaleLowerCase().includes(query)
    //   )
  }

  return (
    <div className="app">
      <section className='form'>
        <input
          className='search'
          type="text"
          placeholder='Search...'
          onChange={ e => setQuery(e.target.value)}
        />
        {/* BASIC SEARCH */}
        {/* <List data={ basicSearch(usersData) } /> */}

        {/* MULTU-SEARCH */}
        <Table data={ multiSearch(usersData) } />

      </section>
    </div>
  );
}

export default App;
