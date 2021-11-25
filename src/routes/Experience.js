import Carousel from "../components/Carousel"
import Skills from "../components/Skills"

function Experience(){
    return(
        <div className='p-6 bg-black font-mono h-screen'>
            <div className='mb-20'>
                <h1 className="text-5xl text-green-500 cursor-default text-center">Experience</h1>
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default Experience