import React from 'react'
import AddButton from '../components/AddButton'
import Location from '../components/Location'
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
            <Location />
        </>
    )
}

export default Landing