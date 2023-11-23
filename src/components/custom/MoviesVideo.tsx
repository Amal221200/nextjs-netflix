import prisma from "@/lib/db";
import { Button } from "../ui/button";

async function getMovie() {
    "use server";
    const movie = await prisma.movie.findFirst({
        select: {
            title: true,
            duration: true,
            overview: true,
            videoSource: true,
            imageString: true,
            release: true,
            id: true
        }
    })

    return movie
}

const MovieVideo = async () => {
    const movie = await getMovie()
    // console.log(movie);

    return (
        <main className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
            <video poster={movie?.imageString} src={movie?.videoSource} autoPlay muted loop
             className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10">
            </video>
            <div className="absolute w-[90%] lg:w-[60%] mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">{movie?.title}</h1>
                <p className="text-white text-lg line-clamp-3">{movie?.overview}</p>
                <div className="flex gap-x-3 mt-2">
                    <Button type="button">See More</Button>
                    <Button type="button">Learn More</Button>
                </div>
            </div>
        </main>
    );
}

export default MovieVideo;