import { Heart, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface iAppProps {
    movieId: number,
    title: string,
    overview: string,
    watchList: boolean,
    watchListId: string,
    youtubeUrl: string,
    age: number,
    release: number,
    duration: number
}

const MovieCard: React.FC<iAppProps> = ({ title, overview, watchList, watchListId, youtubeUrl, age, release: year, duration }) => {
    return (
        <>
            <button type="button" className="-mt-14">
                <PlayCircle className="h-20 w-20" />
            </button>
            <div className="absolute right-5 top-5 z-10">
                <form>
                    <Button variant={'outline'} size={'icon'} type="submit">
                        <Heart className={cn("w-4 h-4", watchList && "text-red-500")} />
                    </Button>
                </form>
            </div>
            <div className="p-5 absolute bottom-0 left-0">
                <h4 className="font-bold text-lg line-clamp-1">{title}</h4>
                <div className="flex gap-x-2">
                    <span className="font-normal text-sm">{year}</span>
                    <span className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</span>
                    <span className="font-normal text-sm">{duration}h</span>
                </div>
                <p className="line-clamp-1 text-sm text-gray-200 font-light">{overview}</p>
            </div>
        </>
    );
}

export default MovieCard;