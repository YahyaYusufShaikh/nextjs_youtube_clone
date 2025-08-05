export function VideoCard(props: any){
    return(
        <div className="p-3">
            <img src={props.Timage} className="rounded-lg"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className={"rounded-full w-10 h-9"} src={props.icon} alt="" />
                </div>
                <div className="col-span-11 pl-2">
                    <div>
                    {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400
                    text-sm">
                    {props.channel}
                </div>
                <div className="col-span-11 text-gray-400
                text-sm">
                   {props.views} | {props.date}
                </div>
                </div>
               
            </div>
        </div>
    )
}