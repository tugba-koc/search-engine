import React from 'react'
import { useSelector } from 'react-redux';
import { selectError } from '../redux/list/listSlice';

const ErrorView = () => {
  let error = useSelector(selectError);
  console.log(error);
  return (
    <p style={{textAlign: "center", marginTop:"30px", color: "red"}}>A problem occured suddenly. Please refresh the page! </p>
  )
}

export default ErrorView