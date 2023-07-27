import './VideoItem.css'
import { FaHeart } from 'react-icons/fa';

type VideoItemType = {
    thumb: string, 
    title: string, 
    desc: string
}

function VideoItem({thumb, title, desc} : VideoItemType){
    return (
        <li className="video-item">
            <div className="thumb">
                <img src={thumb} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>  
            </div>
            <div className="like">
                <FaHeart />
            </div>
        </li>
    )
}

export default VideoItem