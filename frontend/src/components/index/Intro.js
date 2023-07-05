import {useState} from 'react'

function Intro(){
    const attributeStyle = "mt-3 md:text-xl text-center lg:text-left text-md"
    const logoStyle = "w-12 h-12 ml-4"
    const subtextStyle = "text-gray-400"
    const [showEmail, setShowEmail] = useState(false)

    return(
        <div className='p-3 font-mono mb-12'>
            <div className="md:flex lg:flex-row md:flex-col lg:justify-around align-middle p-2 items-center mb-12">
                <div className='flex flex-col items-center'>
                    <img className="object-cover w-96 h-96 m-2 p-2 rounded-full" src="/images/face.png" alt="Profile image"/>
                    <a href="/files/Kenneth_resume.pdf" donwload="kenneth_wong_resume">
                        <h1 className={`${subtextStyle} text-center mt-2 hover:text-purple-600 hover:cursor-pointer font-bold`}>Download my Resume</h1>
                    </a>
                </div>
                <div className='max-w-2xl md:text-lg md:ml-4 text-md text-gray-700 dark:text-gray-200 mt-3 font-bold'>
                    <h1 className='text-3xl md:text-5xl text-center lg:text-left'> Kenneth Wong Hon Nam </h1>
                    <p className={`${attributeStyle} ${subtextStyle}`}> An Avid Machine Learning Hobbyist who's currently training his biological neural net🧠🤖</p>
                    <div className='flex flex-row lg:justify-start justify-center mt-2 mb-2'>
                        <a href="https://github.com/KennethWrong">
                            <img src="/images/GitHubLogo.png" className={`${logoStyle}`} />
                        </a>
                        <a href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                            <img src="/images/linkedinLogo.png" className={`${logoStyle}`}/>
                        </a>
                        <a onClick={() => setShowEmail(!showEmail)} className='cursor-pointer'>
                            <img src="/images/emailLogo.png" className={`${logoStyle}`} />
                        </a>
                        <a href="https://www.instagram.com/werunm.env/?hl=en">
                            <img src="/images/instagramLogo.png" className={`${logoStyle}`} />
                        </a>
                    </div>
                    <p className={`${attributeStyle} ${subtextStyle} ${!showEmail ? "invisible" : ""}
                        text-blue-600 hover:text-purple-600 hover:cursor-pointer`}
                    onClick={() => window.location = 'mailto:cankennethwong@gmail.com'}
                    > cankennethwong [AT] gmail.com</p>
                </div>
            </div>

            <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25 dark:opacity-100" />
        </div>
    )
}

export default Intro