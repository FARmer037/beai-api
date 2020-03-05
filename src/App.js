import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearList from './components/BearList'
import InputForm from './components/InputForm';
import { useSelector, useDispatch } from 'react-redux'

export default () => {

  const dispatch = useDispatch();

  const [formData, setData] = useState({
    name: '',
    weight: 0,
    img: ''
  });

  const { name, weight, img } = formData;

  const getBears = async () => {
    const result = await axios.get(`http://localhost/api/bears`)
    // setBears(result.data)

    const action = {type: 'GET_BEAR', bears: result.data}

    dispatch(action)
  }

  useEffect(() => {
    getBears()
  }, [])

  return (
    <div>
      <h2>Bears</h2>
      <BearList />
      <InputForm />
    </div>
  )
}
