import MovieVideo from "@/components/custom/MoviesVideo";
import RecentlyAdded from "@/components/custom/RecentlyAdded";


const HomePage = async () => {

    return (
        <>
            <div className="p-5 lg:p-0">
                <MovieVideo />
                <RecentlyAdded />
            </div>
        </>
    );
}

export default HomePage;