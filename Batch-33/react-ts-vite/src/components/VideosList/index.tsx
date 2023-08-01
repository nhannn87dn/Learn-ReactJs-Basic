import React from 'react'
import SingleVideo from './SingleVideo';
import { videosList } from '../../data/videosList'

const VideosList = () => {
    const count = videosList.length;
  return (
    <div>
        <h3>{count} Videos</h3>
        {
            videosList.map((video)=> <SingleVideo key={`VideosList_${video.id}`} video={video} />)
        }
    </div>
  )
}

export default VideosList