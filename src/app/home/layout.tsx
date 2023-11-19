import Navbar from "@/components/custom/Navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
                {children}
            </div>
        </>
    );
}

export default HomeLayout;