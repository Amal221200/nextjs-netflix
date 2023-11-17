import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";

const HomePage = async () => {
    const session = await getServerSession(authOptions);
    return (<h1>hello {session?.user?.name}</h1>);
}

export default HomePage;