import React from 'react'
import Todoinput from '../components/common/Todo_input'
import Liste from '../components/common/Liste'
import Header from '../components/Header_Footer/Header'
import Footer from '../components/Header_Footer/Footer'

function Home() {
    return (
        <>
            <Header />
            <Todoinput />
            <Liste />
            <Footer />
        </>
    )
}

export default Home