import { useState } from 'react'
import {Link} from 'react-router-dom'
import Emoji from './Emoji'

function Nav(props){
    const [mode, setMode] = useState(true)

    const modeHandle = () => {
        props.handleDarkToggle()
        setMode(!mode)
    }

    return(
        <div className="navbar shadow-lg bg-yellow-100 rounded-box mb-10 md:sticky top-0 font-mono z-20 dark:bg-gray-800">
            <div className="flex flex-col md:flex-none px-2 mx-2 dark:text-green-400 text-yellow-700 mr-4">
                <span className="md:text-xl font-bold text-xs">
                        <Link to='/'> Kenneth's Portfolio </Link>
                    </span>
            </div> 
            <div className="md:flex-1 px-2 mx-2">
                <div className="items-stretch flex">
                    <div className="btn btn-outline text-xs btn-sm rounded-btn md:text-xl uppercase  text-blue-700 mr-6 hover:text-white hover:bg-blue-700 hidden md:block">
                        <Link to='/about'> About Me </Link> 
                    </div> 
                    <div className="btn btn-outline text-xs  rounded-btn uppercase btn-sm md:text-xl text-red-700 mr-6 hover:text-white hover:bg-red-700 hidden md:block">
                        <Link to='/experience'> Experience </Link>
                    </div> 
                    <a className="btn btn-outline btn-sm text-xs  rounded-btn md:text-xl uppercase text-yellow-600 hover:text-white hover:bg-yellow-600 hidden md:block" 
                    href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                        Contact Me
                    </a>
                    <div className="btn btn-outline btn-sm text-xs md:btn-md rounded-btn uppercase md:text-md text-red-700 ml-6 hover:text-white hover:bg-red-700 md:hidden flex">
                        <Link to='/'>Back</Link>
                    </div> 
                    <div className="btn btn-outline btn-sm text-xs rounded-btn uppercase text-green-500 border-green-500 md:text-xl dark:text-white ml-6 hover:text-green-500 hover:bg-black dark:hover:bg-white dark:hover:text-black dark:border-white flex"
                    onClick={modeHandle}>
                        {mode?"Dark":"Light"}
                    </div> 
                </div>
            </div> 
        </div>
    )
}

export default Nav