import React from 'react'

type Props = {}

const divider = {
    width: "100%",
    height: "1px",
    backgroundColor: "#DADADA",
}
const Divider = (props: Props) => {
  return (
    <div style={{padding: "0 5px 0 5px"}}>
        <div style={divider} />
    </div>
  )
}

export default Divider