
function FilmCard({item}: any) {
  return (
    <div>
        <p>
            Title:{item.title}
        </p>
        <p>
            #:{item.episode_id}
        </p>
        <p>
            Director:{item.director}
        </p>
        <p>
            Released:{item.release_date}
        </p>
        <p>
            characters: 
        </p>
    </div>
  )
}

export default FilmCard
