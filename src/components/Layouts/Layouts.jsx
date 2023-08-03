import React from 'react'
import './layouts.css'
export const SmallLayout = ({ children, direction }) => {
    return (
        <section style={{flexDirection: direction}} className='s_layout'>{children}</section>
    )
}

export const BigLayout = ({ children, direction }) => {
    return (
        <section style={{flexDirection: direction}} className='l_layout'>{children}</section>
    )
}

