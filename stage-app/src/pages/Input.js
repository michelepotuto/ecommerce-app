import React, { Fragment, useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    activate: () => {
      inputRef.current.focus()
    },
    alert: () => {
      alert(`${props.name} is not valid`)
    },
  }))
 return <Fragment>
   <label htmlFor={props.name}>
      {props.label}
    </label>
    <input
      ref={inputRef}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
      className={props.className}
      type={props.type}
      name={props.name}
    />
 </Fragment>
})

export default Input;