import React from "react";
import { Button } from 'react-bootstrap';


export function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  )
};

export function SubmitBtn(props) {
return (
  <Button variant="dark" type="submit"{...props}>Search</Button>
)
};
