import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect("/home")
    }
    return (
        <div className="relative flex flex-col h-screen w-screen md:justify-center md:items-center md:bg-transparent">
            <div className="absolute inset-0 h-full w-full sm:bg-[url(/login_background.jpg)] brightness-50 bg-center bg-cover -z-10" />
            <header className="pl-4 md:pl-6 py-4 md:py-10 flex justify-start w-full">
                <Link href='/' prefetch>
                    <Image src='/netflix_logo.svg' alt="logo" width={120} height={120} className="object-contain" priority />
                </Link>
            </header>
            <main className="flex-grow flex items-center justify-center">
                {children}
            </main>
        </div>
    );
}

export default AuthLayout;