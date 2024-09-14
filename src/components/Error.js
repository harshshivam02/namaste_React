import React from 'react'
import { useRouteError ,Link} from 'react-router-dom'
const Error = () => {
    const error=useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <h3>{error.status} : {error.statusText}</h3>
      <p>An error occurred: {error.message}</p>
      <p>Please try again.</p>
      <Link to="/">Go back to Homepage</Link>

      
    </div>
  )
}

export default Error;
