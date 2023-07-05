import {useNavigate} from 'react-router-dom'

function ProjectCard (props) {
    const titleStyle = "font-mono text-2xl font-bold mb-2"

    let navigate = useNavigate()
    const routeChange = () => {
        navigate(props.link)
    }
    
    return (
        <div className=" bg-slate-200 rounded-lg p-2">
            <h1 className={`${titleStyle}`}>{props.title}</h1>
            <a class="relative block bg-gray-900 group"
                        href="##">
                <img class="absolute inset-0 object-cover
                            w-full h-full group-hover:opacity-20"
                src={props.image} />
                <div class="relative p-5">
                    <div>
                        <div class="transition-all transform
                            translate-y-8 opacity-0
                            group-hover:opacity-100
                            group-hover:translate-y-0">
                            <div class="p-2">
                                <p class="text-lg text-white">
                                    {props.content}
                                </p>
                                <a href={props.link} target="_blank">
                                    <button class="font-mono px-4 py-2 text-sm mt-2
                                            text-white bg-green-600 rounded-lg"
                                    >
                                        View project
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        
    )

}

export default ProjectCard;