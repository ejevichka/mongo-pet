import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Users from './Users'

export const Context = React.createContext([ {userName: 'not authorized'} ]);

const App = () => {
  const [users, setUsers] = useState([])

  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  const getPermition = async() => { 
    Promise.all([getUserEmail(), getUserPermissions()])
    .then(function (results) {
    const acct = results[0];
    const perm = results[1];
    console.log('acct', 'perm', acct, perm);
  })};


  useEffect(() => {
    getData()
    getPermition()
  }, [])

  function getUserEmail() {
    return axios.get('/api/users/5fd21021d230812954b4b49a');
  }
  
  function getUserPermissions() {
    return axios.get('/api/users/5fd21021d230812954b4b49a/permissions');
  }
  


  return (
    <Context.Provider value={users.length> 0 ? users : [ {userName: 'not authorized'}]}>
      <Users/>
    </Context.Provider>
  )
}

export default App

