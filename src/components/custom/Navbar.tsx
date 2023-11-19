"use client";
import { cn } from "@/lib/utils";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserNav from "@/components/custom/UserNav";

interface navLinkProps {
    name: string,
    href: string
}

const navLinks: navLinkProps[] = [
    {
        name: 'Home',
        href: '/home'
    },

    {
        name: 'TV Shows',
        href: '/home/shows'
    },
    {
        name: 'Movies',
        href: '/home/movies'
    },
    {
        name: 'Recently Added',
        href: '/home/recently'
    },
    {
        name: 'My Lists',
        href: '/home/user/lists'
    }
]

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-6 py-5 lg:px-8">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image src="/netflix_logo.svg" alt="logo" width={128} height={50} priority className="" />
                </Link>
                <ul className="lg:flex hidden gap-x-4 ml-14">
                    {
                        navLinks.map(navLink => (
                            <li key={navLink.href}>
                                <Link href={navLink.href} className={cn("text-gray-300 text-sm font-semibold", navLink.href === pathname && "text-white font-bold underline")}>
                                    {navLink.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
                <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
                <UserNav />
            </div>
        </nav>
    );
}

export default Navbar;