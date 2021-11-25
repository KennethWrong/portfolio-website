import {Link} from 'react-router-dom'
import Emoji from './Emoji'

function Welcome(){
    
    return(
        <div className="flex flex-row justify-center h-screen align-middle md:p-0 sm:p-6 font-mono">
            <div className="grid lg:grid-cols-2 md:grid-row-2 lg:gap-4 md:gap-0">
                <div className='flex justify-center'>
                    <div class="m-auto">
                        <h1 className="md:text-6xl text-3xl text-center lg:text-8xl mb-20 text-white uppercase sm:text-center md:text-center lg:text-left">
                            Welcome {'\u2728'}</h1>
                        <h1 className="text-green-300 md:max-w-3xl lg:text-4xl sm:text-sm  md:text-3xl text-center md:text-center lg:text-left mr-0">
                            I am Kenneth, an undergraduate student pursuing Computer Engineering in 
                            Purdue University.
                        </h1>
                        <h1 className=" mt-5 text-center text-md text-yellow-300 uppercase lg:text-left md:text-xl">
                            An aspiring software Engineer.</h1>
                    </div>
                </div>
                <div className='flex flex-col lg:justify-center md:justify-start'>
                    <Link className="btn btn-outline mb-2 border-blue-500 text-blue-500 hover:bg-blue-900 hover:text-white md:btn-lg sm:btn-sm" to="/about">
                        About Me {' '}<Emoji symbol="🤓"/></Link> 
                    <Link className="btn btn-outline mb-2 border-red-900 md:btn-lg sm:btn-sm text-red-900 hover:bg-red-900 hover:text-white" to='/experience'>
                        Experience 
                        <Emoji symbol="👨‍💻"/></Link>   
                        <a className="btn btn-outline mb-2 md:btn-lg sm:btn-sm border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white" href="/images/resume.pdf" download>
                        Resumé
                        <Emoji symbol="📘"/>
                        </a> 
                    <a className="btn btn-outline md:btn-lg sm:btn-sm mb-2 border-green-300 text-green-300 hover:bg-green-600 hover:text-white" href="https://github.com/KennethWrong">
                        Github
                        <Emoji symbol="🧰 "/>
                        </a> 
                    <a className="btn btn-outline mb-2 border-yellow-300 md:btn-lg sm:btn-sm text-yellow-300 hover:bg-yellow-500 hover:text-white" href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                        Linkedin
                        <Emoji symbol="👔"/>
                        </a>   
                </div>
            </div>
    </div>
    )
}

export default Welcome