import Avatar from '@mui/material/Avatar';
import Image from 'next/image'

function Intro(){
    const attributeStyle = "mt-3 md:text-xl text-center lg:text-left text-md"
    const logoStyle = "w-8 h-8 ml-4"

    return(
        <div className='p-3 font-mono mb-12'>
            <div className="md:flex lg:flex-row md:flex-col lg:justify-around align-middle p-2 items-center mb-12">
                <div className='flex flex-col items-center'>
                    <img className="object-cover w-96 h-96 m-2 p-2 rounded-full" src="/images/face.png" alt="Profile image"/>
                    <a href="/files/Kenneth_resume.pdf" donwload="kenneth_wong_resume">
                        <h1 className='text-center mt-2 text-blue-600 hover:text-purple-600 hover:cursor-pointer font-bold'>Download my Resume</h1>
                    </a>
                </div>
                <div className='max-w-2xl md:text-lg md:ml-4 text-md text-gray-700 dark:text-gray-200 mt-3 font-bold'>
                    <h1 className='text-3xl md:text-5xl text-center lg:text-left'> Kenneth Wong Hon Nam </h1>
                    <p className={`${attributeStyle}`}> Senior @ Purdue University in Computer Engineering and Computer Networking and Information Technology</p>
                    <p className={`${attributeStyle}`}> Incoming Software Engineer @ TikTok inc.</p>
                    <p className={`${attributeStyle} text-blue-600 hover:text-purple-600 hover:cursor-pointer`}
                    onClick={() => window.location = 'mailto:cankennethwong@gmail.com'}
                    > cankennethwong [AT] gmail.com</p>
                    <div className='flex flex-row lg:justify-start justify-center mt-2 mb-2'>
                        <a href="https://github.com/KennethWrong">
                            <img src="/images/GitHubLogo.png" className={`${logoStyle}`} />
                        </a>
                        <a href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
                            <img src="/images/linkedinLogo.png" className={`${logoStyle}`}/>
                        </a>
                        <a href="https://www.instagram.com/werunm.env/?hl=en">
                            <img src="/images/instagramLogo.png" className={`${logoStyle}`} />
                        </a>
                    </div>
            </div>
            </div>
            <div className='max-w-2xl md:text-lg md:ml-4 text-md text-gray-700 dark:text-gray-200 mt-3 font-bold'>
                <h1 className='text-3xl md:text-4xl text-gray-700 normal-case dark:text-green-500 mb-3'>Sobre Yo:</h1>
                <p1>
                    Hi, I am Kenneth from HK 🇭🇰. I am a Software Engineer @ <span className='text-yellow-700 dark:text-green-400 font-bold'>TikTok inc</span>. Previously I have interned in the Content Creation and Consumption Team, focusing on improving the user video creation experience. 
                </p1>
                <br/><br/>
                <p1>
                    My interests are in <span className='text-yellow-700 dark:text-green-400 font-bold'> Backend Development</span> and
                    <span className='text-yellow-700 dark:text-green-400 font-bold'> Machine Learning (NLP)</span>. I am quad-lingual (working on the 5th) and
                    am passionate about languages. I am the founder and president of my university's Spanish Conversation Club. In the future, I hope to work with the 2 things I love,
                    <span className='text-yellow-700 dark:text-green-400 font-bold'> software</span> and 
                    <span className='text-yellow-700 dark:text-green-400 font-bold'> languages</span>.
                </p1>
                <br/><br/>
                <p1> Previously, I have had the honour of working in <span className='text-yellow-700 dark:text-green-400 font-bold'>Alco Holdings Limited </span>
                as a Full-stack Web Developer, Creating Websites for the company's new product. <span className='text-yellow-700 dark:text-green-400 font-bold'>Purdue Agriculture</span> as a Software Developer, building web applications to better
                crop yield and quality of farmers. <span className='text-yellow-700 dark:text-green-400 font-bold'>Merck</span> as a techical lead, leading a team to build a
                QR code sample labelling web application to improve their internal sample labelling process.
                </p1>
            </div>
        </div>
    )
}

export default Intro