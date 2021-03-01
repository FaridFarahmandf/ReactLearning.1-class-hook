import React, { useContext } from 'react'
import { BlogContext, useBlogContext } from '../context/BlogContext'
import Album from './Album'
export default function AlbumList() {
    // const {blogState} = useContext(BlogContext);
    const {blogState} = useBlogContext() ;
    const albums = blogState.albums ;
    return (
        <div>
            {albums.map((album) => <Album key={album.id} {...album}></Album>)}
        </div>
    )
}
