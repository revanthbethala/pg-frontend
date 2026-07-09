import React, { createContext, useEffect, useState } from 'react';

import { tokenStorage } from '../services/tokenStorage';
import { registerLogout } from '../services/authCallback';
import { queryClient } from '@/api/queryClient';

type AuthContextType = {
    isAuthenticated: boolean;
    isLoading: boolean;
    setIsAuthenticated: (value: boolean) => void;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: { children: React.ReactNode }) {


    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    async function logout() {
        await tokenStorage.clear();
        setIsAuthenticated(false);
        queryClient.clear();
    }
    useEffect(() => {
        registerLogout(logout);
        async function initialize() {
            const accessToken = await tokenStorage.getAccessToken();
            setIsAuthenticated(!!accessToken);
            setIsLoading(false);
        }

        initialize();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                setIsAuthenticated,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}