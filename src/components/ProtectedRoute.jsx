import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const location = useLocation();

    const isAuthenticated =
        localStorage.getItem("isAuthenticated") === "true";
    const userEmail = localStorage.getItem("userEmail");

    // ❌ NOT logged in → redirect to Auth page
    if (!isAuthenticated || !userEmail) {
        return (
            <Navigate
                to="/auth"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

    // ✅ Logged in → allow access
    return children;
}
