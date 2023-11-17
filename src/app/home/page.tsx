import Navbar from "@/components/Navbar";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";

const HomePage = async () => {
    // const session = await getServerSession(authOptions);
    return (
        <>
            <Navbar />
        </>
    );
}

export default HomePage;