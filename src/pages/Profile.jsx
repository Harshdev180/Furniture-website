import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Phone,
    Calendar,
    LogOut,
    Edit2,
    ShoppingBag,
    Heart,
    Package,
    Shield,
    Settings,
    X,
    Save,
    Bell,
    Lock,
    Globe,
    Moon,
    Sun
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../components/context/AddtocartContext";
import { useWishlist } from "../components/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import { fetchUserData, updateUserProfile, fetchUserOrders } from "../utils/googleSheets";
import { furnitureData } from "../assests/furnitureData";


const orderHistoryShowcase = [
    {
        orderId: "ORD-78421",
        category: "Bedroom",
        productName: "Wooden King Size Bed",
        image:
            "https://i.pinimg.com/1200x/d9/02/79/d902799fce03ef8f54426b45103a21e1.jpg",
        price: 1200,
        qty: 1,
        status: "Delivered",
        orderDate: "15 Dec 2025",
    },
    {
        orderId: "ORD-78305",
        category: "Living",
        productName: "3-Seater Fabric Sofa",
        image:
            "https://i.pinimg.com/1200x/af/bd/cf/afbdcf71db5b292e7f58d84ba6bc407d.jpg",
        price: 1200,
        qty: 1,
        status: "Shipped",
        orderDate: "10 Dec 2025",
    },
    {
        orderId: "ORD-78192",
        category: "Study",
        productName: "Ergonomic Mesh Chair",
        image:
            "https://i.pinimg.com/736x/54/bd/35/54bd35417ae8d3b9f11113daf38695af.jpg",
        price: 220,
        qty: 2,
        status: "Delivered",
        orderDate: "02 Dec 2025",
    },
    {
        orderId: "ORD-78044",
        category: "Bathroom",
        productName: "Floating Vanity",
        image:
            "https://i.pinimg.com/1200x/8b/49/25/8b49255acfa55b3177ceb58a7d728e62.jpg",
        price: 520,
        qty: 1,
        status: "Cancelled",
        orderDate: "28 Nov 2025",
    },
];


export default function Profile() {
    const navigate = useNavigate();
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [editForm, setEditForm] = useState({ name: "", phone: "" });
    const [settings, setSettings] = useState({
        notifications: true,
        emailUpdates: true,
        darkMode: false,
        language: "en"
    });
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalSpent, setTotalSpent] = useState(0);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            const auth = localStorage.getItem("isAuthenticated");
            const email = localStorage.getItem("userEmail");

            if (auth !== "true" || !email) {
                setIsAuthenticated(false);
                navigate("/auth");
                return;
            }

            setIsAuthenticated(true);
            setLoading(true);

            try {
                // Try to fetch from Google Sheets first
                const userResponse = await fetchUserData(email);

                if (userResponse.success && userResponse.userData && userResponse.userData.success) {
                    // Use data from Google Sheets
                    const sheetData = userResponse.userData;
                    const data = {
                        name: sheetData.name || localStorage.getItem("userName") || "User",
                        email: sheetData.email || email,
                        phone: sheetData.phone || localStorage.getItem("userPhone") || "Not provided",
                        signupDate: sheetData.signupDate || localStorage.getItem("userSignupDate") || new Date().toLocaleDateString(),
                    };

                    // Update localStorage with fetched data
                    localStorage.setItem("userName", data.name);
                    localStorage.setItem("userPhone", data.phone);
                    if (sheetData.signupDate) {
                        localStorage.setItem("userSignupDate", sheetData.signupDate);
                    }

                    setUserData(data);
                    setEditForm({ name: data.name, phone: data.phone === "Not provided" ? "" : data.phone });
                } else {
                    // Fallback to localStorage
                    const name = localStorage.getItem("userName");
                    const phone = localStorage.getItem("userPhone");
                    const signupDate = localStorage.getItem("userSignupDate");

                    const data = {
                        name: name || "User",
                        email: email,
                        phone: phone || "Not provided",
                        signupDate: signupDate || new Date().toLocaleDateString(),
                    };
                    setUserData(data);
                    setEditForm({ name: data.name, phone: data.phone === "Not provided" ? "" : data.phone });
                }

                // Load profile picture from localStorage
                const savedPicture = localStorage.getItem("userProfilePicture");
                if (savedPicture) {
                    setProfilePicture(savedPicture);
                }

                // Fetch user orders
                const ordersResponse = await fetchUserOrders(email);
                if (ordersResponse.success && ordersResponse.orders) {
                    setOrders(ordersResponse.orders);
                    setTotalOrders(ordersResponse.orders.length);

                    // Calculate total spent from orders
                    const spent = ordersResponse.orders.reduce((sum, order) => {
                        return sum + (parseFloat(order.total) || 0);
                    }, 0);
                    setTotalSpent(spent);
                } else {
                    // Fallback: calculate from cart if no orders
                    const cartTotal = cart.reduce((total, item) => {
                        const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[₹,\s]/g, '')) || 0;
                        return total + (price * (item.qty || 1));
                    }, 0);
                    setTotalSpent(cartTotal);
                }
            } catch (error) {
                console.error("Error loading user data:", error);
                // Fallback to localStorage on error
                const name = localStorage.getItem("userName");
                const phone = localStorage.getItem("userPhone");
                const signupDate = localStorage.getItem("userSignupDate");

                const data = {
                    name: name || "User",
                    email: email,
                    phone: phone || "Not provided",
                    signupDate: signupDate || new Date().toLocaleDateString(),
                };
                setUserData(data);
                setEditForm({ name: data.name, phone: data.phone === "Not provided" ? "" : data.phone });
            } finally {
                setLoading(false);
            }

            // Load settings from localStorage
            const savedSettings = localStorage.getItem("userSettings");
            if (savedSettings) {
                try {
                    setSettings(JSON.parse(savedSettings));
                } catch (e) {
                    console.error("Error loading settings:", e);
                }
            }
        };

        loadUserData();
    }, [navigate, cart]);

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userName");
            localStorage.removeItem("userPhone");
            localStorage.removeItem("userSignupDate");
            navigate("/");
            window.location.reload(); // Refresh to update navbar
        }
    };

    const handleEditProfile = () => {
        setShowEditModal(true);
    };

    const handleSaveProfile = async () => {
        // Validation
        if (!editForm.name || editForm.name.length < 2) {
            alert("Name must be at least 2 characters");
            return;
        }

        if (editForm.phone && editForm.phone.length > 0 && editForm.phone.length < 10) {
            alert("Please enter a valid phone number (at least 10 digits)");
            return;
        }

        try {
            // Update in Google Sheets
            const updateResult = await updateUserProfile({
                email: userData.email,
                name: editForm.name,
                phone: editForm.phone || "",
            });

            // Update localStorage
            localStorage.setItem("userName", editForm.name);
            localStorage.setItem("userPhone", editForm.phone || "");

            // Update state
            setUserData({
                ...userData,
                name: editForm.name,
                phone: editForm.phone || "Not provided",
            });

            setShowEditModal(false);
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            // Still update localStorage as fallback
            localStorage.setItem("userName", editForm.name);
            localStorage.setItem("userPhone", editForm.phone || "");

            setUserData({
                ...userData,
                name: editForm.name,
                phone: editForm.phone || "Not provided",
            });

            setShowEditModal(false);
            alert("Profile updated locally. Some changes may not sync to server.");
        }
    };

    const handleSettingsChange = (key, value) => {
        const newSettings = { ...settings, [key]: value };
        setSettings(newSettings);
        localStorage.setItem("userSettings", JSON.stringify(newSettings));
    };

    const handleOpenSettings = () => {
        setShowSettingsModal(true);
    };

    const cartCount = cart.reduce((total, item) => total + (item.qty || 1), 0);

    if (!isAuthenticated) {
        return null; // Will redirect to auth
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[#C9A24D] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#3E2723] font-medium">Loading profile...</p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-[#FAF7F2] py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#3E2723] mb-2">
                        My Profile
                    </h1>
                    <p className="text-[#3E2723]/70">Manage your account and preferences</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* LEFT COLUMN - Profile Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-[#E6D5C3]"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        {profilePicture ? (
                                            <img
                                                src={profilePicture}
                                                alt={userData?.name}
                                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#C9A24D]"
                                            />
                                        ) : (
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#C9A24D] to-[#B8923D] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                                <span className="text-3xl sm:text-4xl font-bold text-white">
                                                    {userData?.name?.charAt(0)?.toUpperCase() || "U"}
                                                </span>
                                            </div>
                                        )}
                                        <label
                                            htmlFor="profile-picture-upload"
                                            className="absolute bottom-0 right-0 w-8 h-8 bg-[#C9A24D] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B8923D] transition shadow-lg border-2 border-white"
                                            title="Change profile picture"
                                        >
                                            <Edit2 className="w-4 h-4 text-white" />
                                        </label>
                                        <input
                                            id="profile-picture-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        const base64String = reader.result;
                                                        setProfilePicture(base64String);
                                                        localStorage.setItem("userProfilePicture", base64String);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723]">
                                            {userData?.name}
                                        </h2>
                                        <p className="text-[#3E2723]/60 mt-1">Member since {userData?.signupDate}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleEditProfile}
                                    className="p-2 hover:bg-[#FAF7F2] rounded-lg transition"
                                    aria-label="Edit profile"
                                >
                                    <Edit2 className="w-5 h-5 text-[#3E2723]" />
                                </button>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-[#E6D5C3]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#E6D5C3] rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-[#3E2723]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-[#3E2723]/60 mb-1">Email Address</p>
                                        <p className="text-[#3E2723] font-medium">{userData?.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#E6D5C3] rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-[#3E2723]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-[#3E2723]/60 mb-1">Phone Number</p>
                                        <p className="text-[#3E2723] font-medium">{userData?.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#E6D5C3] rounded-lg flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-[#3E2723]" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-[#3E2723]/60 mb-1">Member Since</p>
                                        <p className="text-[#3E2723] font-medium">{userData?.signupDate}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <Link
                                to="/cart"
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-[#E6D5C3] group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <ShoppingBag className="w-8 h-8 text-[#C9A24D] group-hover:scale-110 transition-transform" />
                                    <span className="text-2xl font-bold text-[#3E2723]">{cartCount}</span>
                                </div>
                                <p className="text-sm text-[#3E2723]/60">Items in Cart</p>
                            </Link>

                            <Link
                                to="/wishlist"
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-[#E6D5C3] group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <Heart className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform fill-red-500" />
                                    <span className="text-2xl font-bold text-[#3E2723]">{wishlist.length}</span>
                                </div>
                                <p className="text-sm text-[#3E2723]/60">Wishlist Items</p>
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN - Actions & Info */}
                    <div className="space-y-6">
                        {/* Account Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl shadow-lg p-6 border border-[#E6D5C3]"
                        >
                            <h3 className="text-xl font-serif font-bold text-[#3E2723] mb-4">
                                Account Actions
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    to="/tracking"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FAF7F2] transition group"
                                >
                                    <Package className="w-5 h-5 text-[#C9A24D] group-hover:scale-110 transition-transform" />
                                    <span className="text-[#3E2723] font-medium">Order Tracking</span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FAF7F2] transition group"
                                >
                                    <Shield className="w-5 h-5 text-[#C9A24D] group-hover:scale-110 transition-transform" />
                                    <span className="text-[#3E2723] font-medium">Support & Help</span>
                                </Link>
                                <button
                                    onClick={handleOpenSettings}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FAF7F2] transition group w-full text-left"
                                >
                                    <Settings className="w-5 h-5 text-[#C9A24D] group-hover:scale-110 transition-transform" />
                                    <span className="text-[#3E2723] font-medium">Settings</span>
                                </button>
                            </div>
                        </motion.div>

                        {/* Logout Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                <LogOut className="w-5 h-5" />
                                Logout
                            </button>
                        </motion.div>

                        {/* Account Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-[#3E2723] to-[#2B1A1A] rounded-2xl p-6 text-white"
                        >
                            <h3 className="text-lg font-serif font-bold mb-4">Account Status</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/80">Status</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                                        Active
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/80">Total Orders</span>
                                    <span className="font-semibold">{totalOrders}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-white/80">Total Spent</span>
                                    <span className="font-semibold">₹{totalSpent.toLocaleString()}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Edit Profile Modal */}
            <AnimatePresence>
                {showEditModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            onClick={() => setShowEditModal(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-serif font-bold text-[#3E2723]">
                                        Edit Profile
                                    </h2>
                                    <button
                                        onClick={() => setShowEditModal(false)}
                                        className="p-2 hover:bg-[#FAF7F2] rounded-lg transition"
                                    >
                                        <X className="w-5 h-5 text-[#3E2723]" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#3E2723] mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={editForm.name}
                                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#E6D5C3] focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723]"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#3E2723] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={editForm.phone}
                                            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#E6D5C3] focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723]"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div className="pt-4 flex gap-3">
                                        <button
                                            onClick={() => setShowEditModal(false)}
                                            className="flex-1 py-3 px-6 rounded-xl border-2 border-[#3E2723] text-[#3E2723] font-semibold hover:bg-[#FAF7F2] transition"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSaveProfile}
                                            className="flex-1 py-3 px-6 rounded-xl bg-[#3E2723] text-white font-semibold hover:bg-[#C9A24D] transition flex items-center justify-center gap-2"
                                        >
                                            <Save className="w-5 h-5" />
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Settings Modal */}
            <AnimatePresence>
                {showSettingsModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            onClick={() => setShowSettingsModal(false)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-serif font-bold text-[#3E2723]">
                                        Settings
                                    </h2>
                                    <button
                                        onClick={() => setShowSettingsModal(false)}
                                        className="p-2 hover:bg-[#FAF7F2] rounded-lg transition"
                                    >
                                        <X className="w-5 h-5 text-[#3E2723]" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Notifications */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#3E2723] mb-4 flex items-center gap-2">
                                            <Bell className="w-5 h-5 text-[#C9A24D]" />
                                            Notifications
                                        </h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAF7F2] transition cursor-pointer">
                                                <span className="text-[#3E2723]">Push Notifications</span>
                                                <input
                                                    type="checkbox"
                                                    checked={settings.notifications}
                                                    onChange={(e) => handleSettingsChange("notifications", e.target.checked)}
                                                    className="w-5 h-5 text-[#C9A24D] rounded focus:ring-[#C9A24D]"
                                                />
                                            </label>
                                            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAF7F2] transition cursor-pointer">
                                                <span className="text-[#3E2723]">Email Updates</span>
                                                <input
                                                    type="checkbox"
                                                    checked={settings.emailUpdates}
                                                    onChange={(e) => handleSettingsChange("emailUpdates", e.target.checked)}
                                                    className="w-5 h-5 text-[#C9A24D] rounded focus:ring-[#C9A24D]"
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    {/* Preferences */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#3E2723] mb-4 flex items-center gap-2">
                                            <Globe className="w-5 h-5 text-[#C9A24D]" />
                                            Preferences
                                        </h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAF7F2] transition cursor-pointer">
                                                <span className="text-[#3E2723] flex items-center gap-2">
                                                    {settings.darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                                                    Dark Mode
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    checked={settings.darkMode}
                                                    onChange={(e) => handleSettingsChange("darkMode", e.target.checked)}
                                                    className="w-5 h-5 text-[#C9A24D] rounded focus:ring-[#C9A24D]"
                                                />
                                            </label>
                                            <div className="p-3 rounded-lg">
                                                <label className="block text-sm font-medium text-[#3E2723] mb-2">
                                                    Language
                                                </label>
                                                <select
                                                    value={settings.language}
                                                    onChange={(e) => handleSettingsChange("language", e.target.value)}
                                                    className="w-full px-4 py-2 rounded-lg border-2 border-[#E6D5C3] focus:border-[#C9A24D] focus:ring-2 focus:ring-[#C9A24D]/20 outline-none transition-all text-[#3E2723]"
                                                >
                                                    <option value="en">English</option>
                                                    <option value="hi">Hindi</option>
                                                    <option value="es">Spanish</option>
                                                    <option value="fr">French</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Security */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#3E2723] mb-4 flex items-center gap-2">
                                            <Lock className="w-5 h-5 text-[#C9A24D]" />
                                            Security
                                        </h3>
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => {
                                                    alert("Password change feature coming soon!");
                                                }}
                                                className="w-full text-left p-3 rounded-lg hover:bg-[#FAF7F2] transition text-[#3E2723] font-medium"
                                            >
                                                Change Password
                                            </button>
                                            <button
                                                onClick={() => {
                                                    alert("Privacy settings feature coming soon!");
                                                }}
                                                className="w-full text-left p-3 rounded-lg hover:bg-[#FAF7F2] transition text-[#3E2723] font-medium"
                                            >
                                                Privacy Settings
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-[#E6D5C3]">
                                        <button
                                            onClick={() => setShowSettingsModal(false)}
                                            className="w-full py-3 px-6 rounded-xl bg-[#3E2723] text-white font-semibold hover:bg-[#C9A24D] transition"
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

