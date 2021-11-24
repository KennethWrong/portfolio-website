import {Link} from 'react-router-dom'

function Welcome(){
    
    return(
        <div className="flex flex-row justify-center h-screen align-middle md:p-0 sm:p-6 font-mono">
            <div className="grid lg:grid-cols-2 md:grid-row-2 lg:gap-4 md:gap-0">
                <div className='flex justify-center'>
                    <div class="m-auto">
                        <h1 className="text-8xl mb-20 text-white uppercase sm:text-center md:text-center lg:text-left">
                            Welcome {'\u2728'}</h1>
                        <h1 className="text-green-300 md:max-w-3xl lg:text-4xl sm:text-center sm:text-3xl md:text-3xl md:text-center lg:text-left mr-0">
                            I am Kenneth, an undergraduate student pursuing Computer Engineering in 
                            Purdue University.
                        </h1>
                        <h1 className="text-xl mt-5 text-yellow-300 uppercase sm:text-center md:text-center lg:text-left">
                            An aspiring software Engineer.</h1>
                    </div>
                </div>
                <div className='flex flex-col lg:justify-center md:justify-start'>
                    <Link className="btn btn-outline mb-2 border-blue-500 text-blue-500 hover:bg-blue-900 hover:text-white btn-lg" to="/about">
                        About Me</Link> 
                    <Link className="btn btn-outline mb-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white btn-lg" to='/experience'>
                        Experience</Link>   
                        <a className="btn btn-outline mb-2 border-purple-500 text-purple-500 btn-lg hover:bg-purple-600 hover:text-white" href="/images/resume.pdf" download>
                        Resumé</a> 
                    <a className="btn btn-outline mb-2 border-green-300 text-green-300 btn-lg hover:bg-green-600 hover:text-white" href="https://github.com/KennethWrong">
                        Github</a> 
                    <a className="btn btn-outline mb-2 border-yellow-300 text-yellow-300 btn-lg hover:bg-yellow-500 hover:text-white" href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                        Linkedin</a>   
                </div>
            </div>
    </div>
    )
}

export default Welcome