import {useState} from 'react'

function Timeline() {
    const attributeStyle = "mt-3 md:text-xl text-center lg:text-left text-md"
    const subtextStyle = "text-gray-400"

    const div1Style = "flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5";
    const dateStyle = "sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-8 p-1 mb-3 sm:mb-0 text-gray-500 rounded-full opacity-70"

    const logoStyle = "w-28 h-28 rounded-xl mr-5 mb-5 md:mb-0"
    const headingStyle = "font-mono font-bold text-2xl"
    const subheadingStyle = "text-gray-500 text-md font-bold opacity-70 mb-2"
    const contextStyle = "text-slate-700 text-lg"

    const listItems = () => {
        return (
            [
                <div class="relative pl-8 sm:pl-32 py-6 group">
                    <div class={`${div1Style}`}>
                        <img src="/images/tiktokLogo.png" className={`${logoStyle}`}></img>
                        <div className='flex flex-row'>
                            <div>
                                <div class={`${headingStyle}`}>TikTok</div>
                                <div class={`${subheadingStyle}`}>Software Engineer, Full-Time. NY,US</div>
                            <div class={`${contextStyle}`}>Returning to TikTok to work Fulltime.</div>
                            </div>
                        </div>
                        <time className={`${dateStyle}`}>  JUL 2023 </time>
                    </div>
                </div>
            ,
                <div class="relative pl-8 sm:pl-32 py-6 group">
                    <div class={`${div1Style}`}>
                        <img src="/images/merckLogo.png" className={`${logoStyle}`}></img>
                        <div className='flex flex-row'>
                            <div>
                                <div class={`${headingStyle}`}>Merck</div>
                                <div class={`${subheadingStyle}`}>Software Engineer, Contract. NJ,US</div>
                            <div class={`${contextStyle}`}>
                                I initally started working for Merck in Purdue's Datamine Corporate Partners program, where students get to work with mentors within the company
                                to tackle interesting projects. We worked on solving a labelling issue within the Merck labs via a web application that has an in-house QR-Code generator
                                and QR-Code scanning function for test sample lookup. Furthermore we designed a platform for scientists to batch upload legacy .csv files, parse them and store 
                                sample info within S3 and pipeline the files into databricks for data viz.
                                <br /> 
                                <br />
                                This project was my first time experimenting with data pipelining, data cleaning and AWS services such as RedShift or S3. Learnt a lot of useful software Engineering
                                practices and had to make a lot of engineering trade off decisions.
                            </div>
                            </div>
                        </div>
                        <time className={`${dateStyle}`}> 2021 - 2022 </time>
                    </div>
                </div>
            ,
                <div class="relative pl-8 sm:pl-32 py-6 group">
                    <div class={`${div1Style}`}>
                        <img src="/images/tiktokLogo.png" className={`${logoStyle}`}></img>
                        <div className='flex flex-row'>
                            <div>
                                <div class={`${headingStyle}`}>TikTok</div>
                                <div class={`${subheadingStyle}`}>Software Engineer, Intern. NJ,US</div>
                                <div class={`${contextStyle}`}>
                                    I was working in the Content Creation and Consumption team within TikTok, working on features related to user contention generation.
                                    My intern project included migrating several large repositories, writing unit tests, integration tests to make sure the integration was successful.
                                    <br/>
                                    <br/>
                                    I also played around with serverless functions, async messages, queues and also the internal cloud CI/CD infrastructure. I also volunteered to work on
                                    an internal "pet project" tool in the company to keep communications active during COVID. 

                                </div>
                            </div>
                        </div>
                        <time className={`${dateStyle}`}> JUN 2021 </time>
                    </div>
                </div>
            ,

                <div class="relative pl-8 sm:pl-32 py-6 group">
                    <div class={`${div1Style}`}>
                        <img src="/images/purdueLogo.png" className={`${logoStyle}`}></img>
                        <div className='flex flex-row'>
                            <div>
                                <div class={`${headingStyle}`}>Purdue Agriculture</div>
                                <div class={`${subheadingStyle}`}>Software Developer, Part-Time. IN,US</div>
                            <div class={`${contextStyle}`}>
                            We were developing a web application for local farmers to monitor crop quality and yield. The frontend tech-stack we used includes Svelte, Typescript and Tailwind .</div>
                            </div>
                        </div>
                        <time className={`${dateStyle}`}> OCT 2021 </time>
                    </div>
                </div>
            ,
                <div class="relative pl-8 sm:pl-32 py-6 group">
                    <div class={`${div1Style}`}>
                        <img src="/images/alcoLogo.png" className={`${logoStyle}`}></img>
                        <div className='flex flex-row'>
                            <div>
                                <div class={`${headingStyle}`}>Alco Holdings Inc.</div>
                                <div class={`${subheadingStyle}`}>Web Developer, Intern. KLN,HK</div>
                                <div class={`${contextStyle}`}>
                                    My first tech job. Was doing frontend and backend development for a medium sized computer manufacturing company in Hong Kong.
                                    My project was to develop a website to display the CEO's conceptual Electrical Vehicle model. 
                                    <br />
                                    <br />
                                    My job entailed daily stand-ups with 
                                    marketing team, design team and the CEO himself. Unfortunately the project was discontinued due to insufficient funding.
                                </div>
                            </div>
                        </div>
                        <time className={`${dateStyle}`}>JUN 2021</time>
                    </div>
                </div>
            ,
                <div class="relative pl-8 sm:pl-32 py-6 group">
                    <div class={`${div1Style}`}>
                        <img src="/images/purdueLogo.png" className={`${logoStyle}`}></img>
                        <div className='flex flex-row'>
                            <div>
                                <div class={`${headingStyle}`}>Purdue University</div>
                                <div class={`${subheadingStyle}`}>Student, Undegraduate. IN,US</div>
                            <div class={`${contextStyle}`}>
                                BSc at Purdue University with a major in Computer Engineering and a minor in Computer Networking and Information Technology (CNIT)</div>
                            </div>
                        </div>
                        <time className={`${dateStyle}`}>2019 - 2021</time>
                    </div>
                </div>
            ]
        )
    }

    return(
        <div className="relative font-inter antialiased mb-10">
        <main class="relative flex flex-col justify-center overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
                <h1 className='font-mono font-bold text-3xl mb-5 text-center lg:text-left'> Experience</h1>
            <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-6">
                <div class="w-full max-w-3xl mx-auto">
                    <div class="-my-12">
                        {listItems()}
                    </div>
                </div>
            </div>
        </div>
        </main>
        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25 dark:opacity-100" />
        </div>
    )
}
export default Timeline




// <div>
//         <div className='max-w-2xl md:text-lg md:ml-4 text-md text-gray-700 dark:text-gray-200 mt-3 font-bold'>
//             <h1 className='text-3xl md:text-5xl text-center lg:text-left'> Kenneth Wong Hon Nam </h1>
//             <p className={`${attributeStyle}`}> Senior @ Purdue University in Computer Engineering and Computer Networking and Information Technology</p>
//             <p className={`${attributeStyle}`}> Incoming Software Engineer @ TikTok inc.</p>
//             <p className={`${attributeStyle} text-blue-600 hover:text-purple-600 hover:cursor-pointer`}
//             onClick={() => window.location = 'mailto:cankennethwong@gmail.com'}
//             > cankennethwong [AT] gmail.com</p>
//             <div className='flex flex-row lg:justify-start justify-center mt-2 mb-2'>
//                 <a href="https://github.com/KennethWrong">
//                     <img src="/images/GitHubLogo.png" className={`${logoStyle}`} />
//                 </a>
//                 <a href="https://www.linkedin.com/in/kenneth-wong-hon-nam/">
//                     <img src="/images/linkedinLogo.png" className={`${logoStyle}`}/>
//                 </a>
//                 <a href="https://www.instagram.com/werunm.env/?hl=en">
//                     <img src="/images/instagramLogo.png" className={`${logoStyle}`} />
//                 </a>
//             </div>
//     </div>
// </div>


// <div className='max-w-2xl md:text-lg md:ml-4 text-md text-gray-700 dark:text-gray-200 mt-3 font-bold'>
//                <h1 className='text-3xl md:text-4xl text-gray-700 normal-case dark:text-green-500 mb-3'>Sobre Yo:</h1>
//                 <p>
//                     Hi, I am Kenneth from HK 🇭🇰. I am a Software Engineer @ <span className='text-yellow-700 dark:text-green-400 font-bold'>TikTok inc</span>. Previously I have interned in the Content Creation and Consumption Team, focusing on improving the user video creation experience. 
//                 </p>
//                 <br/><br/>
//                 <p>
//                     My interests are in <span className='text-yellow-700 dark:text-green-400 font-bold'> Backend Development</span> and
//                     <span className='text-yellow-700 dark:text-green-400 font-bold'> Machine Learning (NLP)</span>. I am quad-lingual (working on the 5th) and
//                     am passionate about languages. I am the founder and president of my university's Spanish Conversation Club. In the future, I hope to work with the 2 things I love,
//                     <span className='text-yellow-700 dark:text-green-400 font-bold'> software</span> and 
//                     <span className='text-yellow-700 dark:text-green-400 font-bold'> languages</span>.
//                 </p>
//                 <br/><br/>
//                 <p> Previously, I have had the honour of working in <span className='text-yellow-700 dark:text-green-400 font-bold'>Alco Holdings Limited </span>
//                 as a Full-stack Web Developer, Creating Websites for the company's new product. <span className='text-yellow-700 dark:text-green-400 font-bold'>Purdue Agriculture</span> as a Software Developer, building web applications to better
//                 crop yield and quality of farmers. <span className='text-yellow-700 dark:text-green-400 font-bold'>Merck</span> as a techical lead, leading a team to build a
//                 QR code sample labelling web application to improve their internal sample labelling process.
//                 </p>
//             </div>