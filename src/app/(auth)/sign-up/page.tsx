"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "../_components/AuthButton";

const SignUp = () => {
    return (
        <div className="mt-24 py-10 px-6 bg-black/80 rounded md:mt-0 md:max-w-sm md:px-14">
            <form action="">
                <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" placeholder="Email" />
                    <Button type="submit" variant="destructive" className="w-full bg-[#e50914] text-white">Create Account</Button>
                </div>
            </form>

            <div className="mt-2 text-center">
                <p className="text-gray-500 text-sm">Already have an account? <Link href="/login" prefetch className="text-white hover:underline">Sign In</Link></p>
            </div>

            <div className="flex mt-6 justify-center items-center gap-x-3">
                <AuthButton provider="github">
                    <GithubIcon className="w-4 h-4" />
                </AuthButton>
                <AuthButton provider="google">
                    <Image src="/google.svg" alt="" width={24} height={24} priority />
                </AuthButton>
            </div>
        </div>
    );
}

export default SignUp;