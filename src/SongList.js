import React from "react"
import SongListItem from './SongListItem';


const SongList = (props) => {
    return (
        < div >
            <ul>
                <SongListItem song={props.songs} />
            </ul>
        </div >
    )
}


export default SongList