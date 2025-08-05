import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between 
    pt-1">
        <div className="text-md inline-flex items-center pb-2">
            <img src="you.jpg" className="cursor-pointer w-30 h-10" ></img>
        </div>
        <div>
            <SearchBar></SearchBar>
        </div>
        <div>
            <img src="sign.png" className="cursor-pointer w-33 h-14 pt-1"></img>
        </div>
    </div>
}