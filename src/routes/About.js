import Emoji from '../components/Emoji'
import Hobbies from '../components/Hobbies'
import Intro from '../components/Intro'
import Skills from '../components/Skills'

function About(){
    return(
        <div className='font-mono'>
            <Intro />
            <Hobbies />
            <Skills />
        </div>

    )
}

export default About