export default function ProjectDisplay({project}){

    return(

        <li>
            <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </li>
    )
}