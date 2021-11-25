import Welcome from '../components/Welcome'

function Home(){
    return(
        <div>
            <Welcome />
            <div className='min-h-80 md:min-h-0'></div>
        </div>
    )
}

export default Home