import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        const userEmail = localStorage.getItem("userEmail");

        if (isAuthenticated !== "true" || !userEmail) {
            navigate("/auth", { state: { from: window.location.pathname } });
        }
    }, [navigate]);

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userEmail = localStorage.getItem("userEmail");

    if (isAuthenticated !== "true" || !userEmail) {
        return (
            <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#C9A24D] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#3E2723] font-medium">Redirecting to login...</p>
                </div>
            </div>
        );
    }

    return children;
}

