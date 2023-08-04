import styles from './SingleVideo.module.css'
import {HiOutlineHeart} from 'react-icons/hi'

type SingleVideoType = {
    id: number,
    title: string,
    desc: string,
    thumb: string,
    url: string,
    icon: string
}

const SingleVideo = ({video}: {video: SingleVideoType}) => {
    const Icon = video.icon;
    return (
    <div className={styles.video_item}>
        <div className="thumb">
            <img src={video.thumb} alt={video.title} />
        </div>
        <div className={styles.content}>
            <h3 className='title'>{video.title}</h3>
            <p className="desc">{video.desc}</p>
        </div>
        <div className={styles.like}>
            <HiOutlineHeart />
        </div>
    </div>
  )
}

export default SingleVideo