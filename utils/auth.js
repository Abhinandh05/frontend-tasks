export const isLoggedIn = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("loggedIn") === "true";
    }
    return false;
};

export const login = () => {
    if (typeof window !== "undefined") {
        localStorage.setItem("loggedIn", "true");
    }
};

export const logout = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("loggedIn");
    }
};
