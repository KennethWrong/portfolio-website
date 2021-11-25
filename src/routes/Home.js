import Welcome from '../components/Welcome'

function Home(){
    return(
        <div>
            <Welcome />
            <div className='min-h-80 lg:h-0'></div>
            <div className='min-h-16 h-16 lg:h-0'></div>
        </div>
    )
}

export default Home