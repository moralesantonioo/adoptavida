import React from 'react'
import { Navbar } from '../components/navbar'

export const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <main style={{ marginTop: '70px' }}>{children}</main>
        </>
    )
}