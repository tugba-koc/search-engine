import React from 'react'
import AddButton from '../components/AddButton'
import Logo from '../components/Logo'
import SearchBarWithIcon from '../components/SearchBarWithIcon'
import ShortList from '../components/ShortList'
import Slider from '../components/Slider'

const Landing = () => {
    return (
        <>
            <AddButton />
            <Logo />
            <SearchBarWithIcon />
            <ShortList />
            <Slider />
        </>
    )
}

export default Landing