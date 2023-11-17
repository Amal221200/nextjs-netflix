"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { ReactNode, useCallback } from "react";

const AuthButton = ({ children, provider }: { children: ReactNode, provider: 'google' | 'github' }) => {
    const handleClick = useCallback(() => {
        signIn(provider)
    }, [provider])
    return (
        <Button onClick={handleClick} variant="outline" size="icon" type="button">
            {children}
        </Button>
    );
}

export default AuthButton;