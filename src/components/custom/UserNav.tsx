"use client";
import { signOut, useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const UserNav = () => {
    const { data, status } = useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                    <Avatar className="h-10 w-10 rounded-sm">
                        <AvatarImage src={data?.user?.image!} alt="profile" width={15} height={15} />
                        <AvatarFallback className="rounded-sm">{data?.user?.name?.at(0)?.toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col gap-y-1">
                        <p className="text-sm font-medium leading-none">{data?.user?.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{data?.user?.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut({ redirect: true, callbackUrl: '/login' })}>
                    <p className="flex items-center gap-x-2">
                        <LogOut />  Logout
                    </p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserNav;