import Navbar from "@/components/custom/Navbar";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";

const HomePage = async () => {

    return (
        <>
            <main>
                Hello
            </main>
        </>
    );
}

export default HomePage;