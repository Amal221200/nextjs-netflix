import prisma from "@/lib/db";
import Image from "next/image";
import MovieCard from "./MovieCard";

async function getMovies() {
    "use server";
    const movies = await prisma.movie.findMany({
        select: {
            id: true,
            title: true,
            overview: true,
            videoSource: true,
            imageString: true,
            WatchLists: true,
            youtubeString: true,
            age: true,
            release: true,
            duration: true
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 4
    })

    return movies
}


const RecentlyAdded = async () => {
    const movies = await getMovies();

    return (
        <section>
            <h1 className="text-3xl font-bold">Recently Added</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
                {
                    movies.map((movie) => (
                        <article key={movie.id} className="relative h-48">
                            <Image src={movie.imageString} alt="" width={500} height={400} className="absolute w-full h-full object-cover" />
                            <div className="h-60 relative z-10 w-full transform transition duration-500 opacity-0 hover:opacity-100 hover:scale-125">
                                <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 h-full w-full rounded-lg flex items-center justify-center">
                                    <Image src={movie.imageString} alt="" width={800} height={800} className="absolute w-full h-full rounded-lg object-cover -z-10" />
                                    <MovieCard movieId={movie.id} title={movie.title} overview={movie.overview} watchListId={movie.WatchLists[0]?.id} youtubeUrl={movie.youtubeString} watchList={movie.WatchLists.length !== 0} key={movie.id} release={movie.release} age={movie.age} duration={movie.duration} />
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

export default RecentlyAdded;