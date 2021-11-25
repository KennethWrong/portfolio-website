function Intro(){

    return(
        <div className='p-3 font-mono mb-20'>
        <   h1 className='text-3xl md:text-4xl text-gray-200 normal-case'>About Me</h1>
            <div class="md:flex lg:flex-row md:flex-col lg:justify-around align-middle p-2">
                <div className=''>
                    <img src='/images/face.jpg' class="mask mask-circle max-h-300 lg:max-h-400"/>
                </div>
                <div className='max-w-2xl md:text-lg text-md'>
                    <p1 className='text-gray-200'>Hi! My name is Kenneth, I am a Geek and I enjoy anything to do with tech. I am a self
                    taught Software Developer and is interested in <span className='text-green-400'>Systems Design</span> and <span className='text-green-400'>Software Development</span>. My first ever
                    web-development experience was in 2019 with <a className='text-green-400 italic' href='https://fullstackopen.com/en/#course-contents'>Full Stack Open Bootcamp</a>, where I created my first chat application with ReactJS,
                    NodeJS and MongoDB.
                    </p1><br/><br/>
                    <p1 className='text-gray-200'>Through the few years that I have been programming, I have had the honour of working in <span className='text-green-400 font-bold'>Alco Holdings Limited </span>
                    as a Full-stack Web Developer, Creating Websites for the company's new product. <span className='text-green-400 font-bold'>Purdue Agriculture</span> as a Software Developer, building web applications to better
                    crop yield and quality of farmers.
                    </p1>
                </div>
            </div>
        </div>
    )
}

export default Intro