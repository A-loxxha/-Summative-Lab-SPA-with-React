import ProjectDisplay from "./ProjectDisplay";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function ContentDisplay({projects}){

    const[search, projectSearch] = useState("")
    const filterProjects = projects.filter((project)=>
        project.title.toLowerCase().includes(search.toLowerCase()))
    return(
        <div className="content-display">
            <SearchBar search={search} projectSearch={projectSearch}/>
            <ul>
                {filterProjects.map((project)=>(
                    <ProjectDisplay key ={project.Id} project={project}/>
                ))}
            </ul>
        </div>
    )
};