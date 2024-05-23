import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await axios.get(`${URL}/refetch`, { withCredentials: true });
            setUser(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching user:", err);
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}