
import React, {useEffect, useCallback, useState} from 'react'
import axios from 'axios'

export default function Form() {
      const [value, setState] = useState({name: '', newPass: ''})

      const getData = async() => {
        const res = axios.post('/api/users/form/', {
          userName: value.name,
          newPassowrd: value.newPass
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        //setState(res.data)
      }

      const handleChange = useCallback(
        (event) => {
          setState({
            ...value,
            [event.target.name]: event.target.value,
          });
        },
        [value, setState],
      );

      const handleSubmit = event => {
        alert('Отправленное имя: ' + value);
        getData()
        event.preventDefault();
      }
  
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Имя:
            <input type="text" name='name' value={value.name} onChange={handleChange} />
            <input type="text" name='newPass' value={value.newPass} onChange={handleChange} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
  }