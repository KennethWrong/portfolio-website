
function Hobbies(){
    return(
        <div>
            <div class="flex flex-col md:flex-row w-full">
                <div class="grid flex-grow rounded-box place-items-center">
                    <div className='flex flex-col mr-16 md:mr-0'>
                        <h1 className='sm:text-2xl md:text-4xl text-green-400 normal-case mb-2'>Hobbies</h1>
                        <ul className='text-gray-200 list-disc sm:text-md md:text-lg'>
                            <li className='mb-1'>Learn to play the Piano</li>
                            <li className='mb-1'>Build Websites</li>
                            <li className='mb-1'>Learn Spanish</li>
                            <li className='mb-1'> Swimming</li>
                        </ul>
                    </div>
                </div> 
                <div class="divider md:divider-vertical"></div> 
                <div class="grid flex-grow h-32 rounded-box place-items-center">
                    <div className='flex flex-col justify-end'>
                        <h1 className='sm:text-2xl md:text-4xl text-green-400 normal-case mb-2'>Interests</h1>
                        <ul className='text-gray-200 list-disc sm:text-md md:text-lg'>
                            <li className='mb-1'>Data Structures and Algorithms</li>
                            <li className='mb-1'>Network Communication</li>
                            <li className='mb-1'>Design Patterns</li>
                            <li className='mb-1'>Web-development</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <div className='min-h-80'></div>
        </div>
    )
}

export default Hobbies