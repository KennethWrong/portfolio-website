import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div className="navbar shadow-lg bg-black rounded-box mb-10 sticky top-0 font-mono">
            <div className="flex-none px-2 mx-2 text-green-400 mr-4">
                <span className="md:text-xl font-bold sm:text-lg">
                        <Link to='/'> Kenneth's Portfolio </Link>
                    </span>
            </div> 
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch lg:flex">
                    <div className="btn btn-outline md:btn-md sm:btn-sm rounded-btn md:text-md md:text-xl uppercase  text-blue-700 mr-6 hover:text-white hover:bg-blue-700">
                        <Link to='/about'> About Me </Link> 
                    </div> 
                    <div className="btn btn-outline md:btn-md rounded-btn uppercase sm:text-md sm:btn-sm md:text-xl text-red-700 mr-6 hover:text-white hover:bg-red-700">
                        <Link to='/experience'> Experience </Link>
                    </div> 
                    <a className="btn btn-outline sm:btn-sm md:btn-md rounded-btn md:text-xl sm:text-md uppercase text-yellow-400 hover:text-white hover:bg-yellow-400" href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                        Contact Me
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Nav