// Components
import AddButton from '../components/AddButton'
import Location from '../components/Location'
import Logo from '../components/Logo'
import SearchBarWithIcon from '../components/SearchBarWithIcon'
import ShortList from '../components/ShortList'
import Slider from '../components/Slider'
import Slider2 from '../components/Slider2'

const Landing = () => {
    return (
        <>
            <AddButton />
            <Logo />
            <SearchBarWithIcon />
            <ShortList />
            <Slider />
            <Slider2 />
            <Location />
        </>
    )
}

export default Landing