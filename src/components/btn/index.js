import React from 'react';

const Btn = ({cont}) =>{
  return(
    <>
        {cont.map((btn, index) =>{
          return(<div className={btn[1]} onClick={btn[2]}>{btn[0]}</div>)
        })}
    </>
  )
}

export default Btn;
