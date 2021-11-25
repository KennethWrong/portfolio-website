function Modal(props){
    let obj = props.project

    return(
        <div className="static font-mono">
            <label htmlFor={`my-modal-${props.keys}`} className="btn btn-ghost modal-button text-green-600">Learn More</label> 
            <input type="checkbox" id={`my-modal-${props.keys}`} className="modal-toggle" /> 

            <div className="modal min-w-min md:min-w-max bg-transparent">
            <div className="modal-box w-2xl md:w-7xl bg-black text-white bg-gradient-to-r from-black via-gray-700 to-green-800">
            <kbd className="kbd kbd-lg text-black text-md md:text-2xl">{obj.title}</kbd> <br/>
            <kbd className="kbd text-black mt-2 mb-2 text-sm md:text-lg">From: {obj.date_from}</kbd> <br/>
            <kbd className="kbd text-black mb-3  text-md md:text-lg">To: {obj.date_to}</kbd>
                <p className="text-md md:text-xl w-lg hidden md:block">{obj.content}</p> 
                <div className="modal-action">
                <label htmlFor={`my-modal-${props.keys}`} className={`btn bg-green-700 ${obj.link_to?'':'btn-disabled'}`}><a href={`${obj.link_to}`}>Link to</a></label>  
                <label htmlFor={`my-modal-${props.keys}`} className="btn bg-red-800">Close</label>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Modal