import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom';

const UserRoute = ({ children, ...rest }) => {

    const { currentUser } = useSelector((state) => state.user);

  return (
    currentUser ? <Route {...rest} /> : <Link to={"login"}></Link>
  )
}

export default UserRoute