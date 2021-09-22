import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NotFound () {
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>404 Not Found</h2>
      <div>Sorry, an error has occured, Requested page not found!</div>
      <Button variant='secondary' size='md'>
        <Link className='link' to='/questions'>
          Take me to the home page
        </Link>
      </Button>
    </div>
  );
}

export default NotFound;
