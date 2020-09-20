import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout(props) {
    return (
        <div>
            <Header/>
            <div className="page-wrapper">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
