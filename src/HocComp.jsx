import React from 'react'

function HocComp(WrappedComponent) {
  return (props)=>{
    if(props.stack === "Java" || props.stack === "Node"){
        return(
            <WrappedComponent {...props} color={"tomato"}/>
        )
    }
    else{
        return(
            <WrappedComponent {...props} color={"skyblue"}/>
        )
    }
  }
}

export default HocComp