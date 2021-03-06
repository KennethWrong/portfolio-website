import {Link} from 'react-router-dom'
import Emoji from './Emoji'

function Welcome(){
    
    return(
        <div className="flex flex-row justify-center h-screen align-middle md:p-0 sm:p-6 font-mono">
            <div className="grid lg:grid-cols-2 md:grid-row-2 lg:gap-4 md:gap-0">
                <div className='flex justify-center'>
                    <div class="m-auto">
                        <h1 className="md:text-5xl md:mt-4 text-3xl text-center mb-10 text-white uppercase sm:text-center md:text-center lg:text-left">
                            Welcome {'\u2728'}</h1>
                        <h1 className="text-green-300 md:max-w-3xl lg:text-2xl sm:text-sm  md:text-xl text-center md:text-center lg:text-left mr-0">
                            I am Kenneth, an undergraduate student pursuing Computer Engineering in 
                            Purdue University.
                        </h1>
                        <h1 className=" mt-5 text-center text-md text-yellow-300 uppercase lg:text-left md:text-lg lg:text-xl">
                            An aspiring software Engineer.</h1>
                    </div>
                </div>
                <div className='flex flex-col lg:justify-center md:justify-start self-center items-center'>
                    <Link className="btn btn-outline mb-2 border-blue-500 text-blue-500 hover:bg-blue-900 hover:text-white btn-lg lg:w-full w-4/12" to="/about">
                        About Me {' '}<Emoji symbol="🤓"/></Link> 
                    <Link className="btn btn-outline mb-2 border-red-900 md:btn-lg btn-lg lg:w-full text-red-900 hover:bg-red-900 hover:text-white w-4/12" to='/experience'>
                        Experience 
                        <Emoji symbol="👨‍💻"/></Link>   
                        <a className="btn btn-outline mb-2 btn-lg lg:w-full border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white w-4/12" href="/images/resume.pdf" download>
                        Resumé
                        <Emoji symbol="📘"/>
                        </a> 
                    <a className="btn btn-outline btn-lg lg:w-full mb-2 border-green-300 text-green-300 hover:bg-green-600 hover:text-white w-4/12" href="https://github.com/KennethWrong">
                        Github
                        <Emoji symbol="🧰 "/>
                        </a> 
                    <a className="btn btn-outline mb-2 border-yellow-300 btn-lg text-yellow-300 hover:bg-yellow-500 hover:text-white lg:w-full w-4/12" href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                        Linkedin
                        <Emoji symbol="👔"/>
                        </a>   
                </div>
            </div>
    </div>
    )
}

export default Welcome