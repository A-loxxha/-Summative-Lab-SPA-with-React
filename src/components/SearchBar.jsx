export default function SearchBar({search, projectSearch}){

    return(

        <div>
            <form action="">
                <input type="text" value={search} onChange={(event)=> projectSearch(event.target.value)} placeholder="Search Projects" />
            </form>
        </div>
    )
}