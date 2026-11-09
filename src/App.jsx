import {useState} from "react"
import Header from "./components/Header";
import ContentDisplay from "./components/ContentDisplay";
import Inputs from "./components/Inputs";
import "./App.css"

export default function App(){
  
const[projects, addProjects] = useState([]);

const addProject = (title, description) =>{
  const newProject = {id:"", title, description}
  addProjects([...projects,newProject])
}
  return(

    <div>
      <Header/>
      <Inputs addProject={addProject}/>
      <ContentDisplay projects={projects}/>
    </div>
  )
}