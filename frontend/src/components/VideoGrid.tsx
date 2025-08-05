import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},
{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
},{
    title :"Top Best Nasheed ever",
    channel :"Yahya Yusuf",
    views :"100M views",
    date :"2 days ago",
    Timage :'mqdefault.jpg',
    icon :'icon.jpg',
}];


export const VideoGrid = () =>{
    return(
        <div className="grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard
                title = {video.title}
                channel = {video.channel}
                views = {video.views}
                date = {video.date}
                Timage = {video.Timage}
                icon = {video.icon}
                ></VideoCard>
            </div>)}

        </div>
    )
}