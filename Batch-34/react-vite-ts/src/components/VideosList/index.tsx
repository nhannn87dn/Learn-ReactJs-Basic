import React from 'react'
import {FaHeart} from 'react-icons/fa'
import styles from './videosList.module.css'

type SingleVideoType = {
    thumb: string,
    title: string,
    desc: string
}

const SingleVideo = ({thumb, title, desc}: SingleVideoType)=>{
    console.log('SingleVideo render');
    return (
        <div className={styles.video_item}>
            <div className={styles.thumb}>
                <img src={thumb} alt={title}/>
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div className={styles.icons}>
                <FaHeart />
            </div>
        </div>
    )
}
const VideosList = () => {
    console.log('VideosList render');
  return (
    <div className={styles.video_wrapper}>
        <h2 className='text-xl'>React Videos</h2>
        <p>A brief history of React</p>
        <input className='bg-slate-200 rounded-full py-2 px-4' type="text" name='keywords' placeholder='Search' />
        <h4 className='my-2'>5 Videos</h4>
        <SingleVideo thumb='./images/hinh-1.png' title='abc' desc='desc' />
        <SingleVideo thumb='./images/hinh-2.jpg' title='abcdè' desc='desc' />
    </div>
  )
}

export default VideosList