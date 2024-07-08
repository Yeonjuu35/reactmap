import React from 'react'

// props 다용화 가능 -> 재사용 가능
function NaviLi(props) {
    return (
      <li className={props.cls}>
        <a href={props.href}>{props.atext}</a>
      </li>  
    )
}

function NaviLiIcon(props) {
    return (
      <li className={props.cls}>
        <a href={props.href}><i className={`bi ${props.navii}`}></i></a>
      </li>  
    )
}

export default NaviLi
export {NaviLiIcon}
