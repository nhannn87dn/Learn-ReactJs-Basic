import { videos } from "../../data/videos"

interface IVideos {
    title: string;
    thumb: string;
    desc: string

}

const SingleVideo = ({title, thumb, desc}: IVideos)=>{
    return (
        <div className="item flex items-center">
             <div className="thumb w-[140]">
                <img src={thumb} alt={title} />
             </div>
             <div className="content flex justify-between flex-1">
                    <div className="content_wrapper">
                        <h3 className="font-bold">{title}</h3>
                        <p className="text-slate-500">{desc}</p>
                    </div>
                    <div className="">
                        icon 
                    </div>
             </div>
        </div>
    )
}

const Videos = () => {
  return (
    <div className="videos">

        {
            videos.map((video)=>{
                return <SingleVideo key={video.id} desc={video.desc} title={video.title} thumb={video.thumb} />
            })
        }

    </div>
  )
}

export default Videos