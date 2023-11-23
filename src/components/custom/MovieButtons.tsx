"use client";

import { Button } from "@/components/ui/button";
import PlayVideoModal from "@/components/custom/PlayVideoModal";
import { Info, PlayCircle } from "lucide-react";
import { useCallback, useState } from "react";

interface MovieButtonsProps {
    title: string,
    overview: string,
    age: number,
    id: number,
    release: number,
    duration: number,
    youtubeUrl: string
}

const MovieButtons: React.FC<MovieButtonsProps> = ({ title, overview, age, id, release, duration, youtubeUrl }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
        setOpen((current) => !current)
    }, [])
    return (
        <>
            <div className="flex gap-x-3 mt-2">
                <Button type="button" onClick={toggleOpen} className="text-lg font-medium">
                    <PlayCircle className="mr-2 h-6 w-6" /> Play
                </Button>
                <Button type="button" onClick={toggleOpen} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
                    <Info className="mr-2 h-6 w-6" /> Learn More
                </Button>
            </div>
            <PlayVideoModal key={id} state={open} changeState={toggleOpen} title={title} overview={overview} release={release} age={age} duration={duration} youtubeUrl={youtubeUrl} />
        </>
    );
}

export default MovieButtons;