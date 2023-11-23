"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PlayVideoModalProps {
    title: string,
    overview: string,
    youtubeUrl: string,
    state: boolean,
    changeState: any,
    release: number,
    age: number,
    duration: number,

}

const PlayVideoModal: React.FC<PlayVideoModalProps> = ({ title, overview, youtubeUrl, state, changeState, release, age, duration }) => {
    return (
        <Dialog open={state} onOpenChange={changeState}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{overview}</DialogDescription>
                    <div className="flex gap-x-2 items-center">
                        <span>{release}</span>
                        <span className="border py-0.5 px-1 border-gray-200 rounded">{age}+</span>
                        <span>{duration}h</span>
                    </div>  
                </DialogHeader>
                <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
            </DialogContent>
        </Dialog>
    );
}

export default PlayVideoModal;