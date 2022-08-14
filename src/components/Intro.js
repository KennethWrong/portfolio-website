function Intro(){

    return(
        <div className='p-3 font-mono mb-20'>
        <   h1 className='text-3xl md:text-4xl text-gray-700 normal-case dark:text-green-500'>About Me</h1>
            <div class="md:flex lg:flex-row md:flex-col lg:justify-around align-middle p-2">
                <div className=''>
                    <img src='/images/face.jpg' class="mask mask-circle max-h-300 lg:max-h-400"/>
                </div>
                <div className='max-w-2xl md:text-lg text-md text-gray-700 dark:text-gray-200'>
                    <p1>Hi! My name is Kenneth, a Techie that enjoys anything to do with tech. I am a self
                    taught Software Developer and is interested in <span className=' text-yellow-700 dark:text-green-400'>Systems Design</span> and <span className='text-yellow-700 dark:text-green-400'>Software Development</span>. My first ever
                    web-development experience was in 2021 with <a className='text-yellow-700 dark:text-green-400 italic' href='https://fullstackopen.com/en/#course-contents'>Full Stack Open Bootcamp</a>, where I created my first chat application with ReactJS,
                    NodeJS and MongoDB.
                    </p1><br/><br/>
                    <p1>Through the few years that I have been programming, I have had the honour of working in <span className='text-yellow-700 dark:text-green-400 font-bold'>Alco Holdings Limited </span>
                    as a Full-stack Web Developer, Creating Websites for the company's new product. <span className='text-yellow-700 dark:text-green-400 font-bold'>Purdue Agriculture</span> as a Software Developer, building web applications to better
                    crop yield and quality of farmers.
                    </p1><br/><br/>
                    <p1>Recently, I worked for <span className='text-yellow-700 dark:text-green-400 font-bold'>TikTok inc.</span> as a software Engineering Intern. I was working on
                    the Content Creation and Consumption Team, focusing on improving the user video creation experience. I primarily worked on the backend, interfacing with serverless functions and RPC calls.</p1>
                </div>
            </div>
        </div>
    )
}

export default Intro