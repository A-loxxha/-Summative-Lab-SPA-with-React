import { useState } from "react"

export default function Inputs({addProject}){

    const [title, addTitle] = useState("")
    const [description, addDescription] = useState("")

    const submit = (event)=>{
        event.preventDefault()
        if(!title.trim())
            return
        addProject(title, description)
        addTitle("")
        addDescription("")
    }

    return(
        <div className="inputs">
            <h1>Add Project</h1>

            <form onSubmit={submit}>
                <label>Title</label>
                <input id="title" value={title} onChange={(event)=>addTitle(event.target.value)} type="text" />
                <label>Description</label>
                <input id="description" value={description} onChange={(event)=> addDescription(event.target.value)} type="text" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}