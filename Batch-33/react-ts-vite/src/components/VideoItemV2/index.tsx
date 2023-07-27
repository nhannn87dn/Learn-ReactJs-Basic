import styles from './VideoItemV2.module.css'
import { FaHeart } from 'react-icons/fa';

type VideoItemType = {
    thumb: string, 
    title: string, 
    desc: string
}

function VideoItemV2({thumb, title, desc} : VideoItemType){
    return (
        <li className={styles.video_item}>
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

export default VideoItemV2