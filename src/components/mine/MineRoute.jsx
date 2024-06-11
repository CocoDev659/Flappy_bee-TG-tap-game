import React from 'react'
import Nav from '../Navigation/nav'
import Footer from '../footer/Footer'
import Mine from './Mine'

const MineRoute = () => {

    return (
        <div className='flex flex-col bg-black'>
            <Nav />
            <Mine />
            <Footer />
        </div>
    )
}

export default MineRoute