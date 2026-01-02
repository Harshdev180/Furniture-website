import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitSignIn, submitSignUp } from "../utils/googleSheets";
import { motion } from "framer-motion";

export default function AuthFlip() {
  const [active, setActive] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const navigate = useNavigate();

  // Form states
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validation
    if (!signInData.email || !signInData.password) {
      setSubmitStatus({ type: "error", message: "Please fill in all fields" });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(signInData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      setIsSubmitting(false);
      return;
    }

    if (!validatePassword(signInData.password)) {
      setSubmitStatus({ type: "error", message: "Password must be at least 6 characters" });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitSignIn({ email: signInData.email, password: signInData.password });
      if (result.success) {
        setSubmitStatus({ type: "success", message: "Signed in successfully!" });
        // Store user session
        localStorage.setItem("userEmail", signInData.email);
        localStorage.setItem("isAuthenticated", "true");
        // Try to get user data from localStorage if available
        const storedName = localStorage.getItem("userName");
        const storedPhone = localStorage.getItem("userPhone");
        if (storedName) localStorage.setItem("userName", storedName);
        if (storedPhone) localStorage.setItem("userPhone", storedPhone);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setSubmitStatus({ type: "error", message: result.message || "Invalid email or password" });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again." });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validation
    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      setSubmitStatus({ type: "error", message: "Please fill in all required fields" });
      setIsSubmitting(false);
      return;
    }

    if (signUpData.name.length < 2) {
      setSubmitStatus({ type: "error", message: "Name must be at least 2 characters" });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(signUpData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      setIsSubmitting(false);
      return;
    }

    if (!validatePassword(signUpData.password)) {
      setSubmitStatus({ type: "error", message: "Password must be at least 6 characters" });
      setIsSubmitting(false);
      return;
    }

    if (signUpData.phone && signUpData.phone.length < 10) {
      setSubmitStatus({ type: "error", message: "Please enter a valid phone number" });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitSignUp({
        name: signUpData.name,
        email: signUpData.email,
        phone: signUpData.phone,
        password: signUpData.password,
      });
      if (result.success) {
        setSubmitStatus({ type: "success", message: "Account created successfully! You can now sign in." });
        // Store user data
        localStorage.setItem("userEmail", signUpData.email);
        localStorage.setItem("userName", signUpData.name);
        localStorage.setItem("userPhone", signUpData.phone || "");
        localStorage.setItem("userSignupDate", new Date().toLocaleDateString());
        localStorage.setItem("isAuthenticated", "true");
        // Switch to sign in after successful signup
        setTimeout(() => {
          setActive(false);
          setSignInData({ email: signUpData.email, password: "" });
        }, 1500);
      } else {
        setSubmitStatus({ type: "error", message: result.message || "Sign up failed. Email may already be in use." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again." });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .input {
          width: 100%;
          margin-bottom: 12px;
          padding: 12px 16px;
          background: #FAF7F2;
          border: 2px solid #E6D5C3;
          border-radius: 8px;
          font-size: 14px;
          color: #3E2723;
          outline: none;
          transition: all 0.3s;
        }
        .input:focus {
          border-color: #C9A24D;
          box-shadow: 0 0 0 3px rgba(201, 162, 77, 0.1);
        }
        .btn-primary {
          background: #3E2723;
          color: #FAF7F2;
          padding: 12px 40px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        .btn-primary:hover {
          background: #C9A24D;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(201, 162, 77, 0.3);
        }
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (min-width: 768px) {
          .right-panel-active .sign-in {
            transform: translateX(100%);
            opacity: 0;
          }
          .right-panel-active .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
          }
          .right-panel-active .overlay-container {
            transform: translateX(-100%);
          }
          .right-panel-active .overlay {
            transform: translateX(50%);
          }
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4 sm:px-6 py-8 sm:py-20">
        <div
          className={`relative w-full max-w-[900px] min-h-[500px] sm:min-h-[520px] bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden
          transition-all duration-700 ${active && isDesktop ? "right-panel-active" : ""
            }`}
        >
          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex justify-center gap-6 py-6 border-b border-[#E6D5C3]">
            <button
              onClick={() => setActive(false)}
              className={`text-sm font-medium transition-colors ${!active ? "text-[#3E2723] underline font-bold" : "text-gray-400"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setActive(true)}
              className={`text-sm font-medium transition-colors ${active ? "text-[#3E2723] underline font-bold" : "text-gray-400"
                }`}
            >
              Sign Up
            </button>
          </div>

          {/* SIGN IN */}
          <div
            className={`sign-in md:absolute md:top-0 md:left-0 md:w-1/2 w-full h-full
            flex flex-col justify-center items-center px-8 md:px-12 transition-all duration-700
            ${active ? "hidden md:flex opacity-0 pointer-events-none" : "flex opacity-100"}`}
          >
            <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-[#3E2723]">Welcome Back</h2>

            {submitStatus && (
              <div
                className={`w-full mb-4 p-3 rounded-lg text-sm ${submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSignIn} className="w-full max-w-sm">
              <input
                className="input"
                placeholder="Email"
                type="email"
                value={signInData.email}
                onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                required
              />
              <input
                className="input"
                placeholder="Password"
                type="password"
                value={signInData.password}
                onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                required
              />

              <p
                onClick={() => setShowForgot(true)}
                className="text-sm mb-4 cursor-pointer text-[#6b5f55] hover:text-[#C9A24D] transition-colors"
              >
                Forgot your password?
              </p>

              <button className="btn-primary w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing In..." : "SIGN IN"}
              </button>
            </form>
          </div>

          {/* SIGN UP */}
          <div
            className={`sign-up md:absolute md:top-0 md:left-0 md:w-1/2 w-full h-full
            flex flex-col justify-center items-center px-8 md:px-12 transition-all duration-700
            ${active ? "flex opacity-100" : "hidden md:flex opacity-0 pointer-events-none"}`}
          >
            <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-[#3E2723]">Create Account</h2>

            {submitStatus && (
              <div
                className={`w-full max-w-sm mb-4 p-3 rounded-lg text-sm ${submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSignUp} className="w-full max-w-sm">
              <input
                className="input"
                placeholder="Name"
                value={signUpData.name}
                onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                required
              />
              <input
                className="input"
                placeholder="Email"
                type="email"
                value={signUpData.email}
                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                required
              />
              <input
                className="input"
                placeholder="Phone (Optional)"
                type="tel"
                value={signUpData.phone}
                onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
              />
              <input
                className="input"
                placeholder="Password"
                type="password"
                value={signUpData.password}
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                required
              />

              <button className="btn-primary w-full mt-3" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating Account..." : "SIGN UP"}
              </button>
            </form>
          </div>

          {/* FORGOT PASSWORD */}
          {showForgot && (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center px-8 z-50">
              <h2 className="text-2xl font-serif text-[#3E2723] mb-4">Reset Password</h2>
              <input className="input" placeholder="Email" type="email" />
              <button className="btn-primary mt-3">SEND RESET LINK</button>
              <button
                onClick={() => setShowForgot(false)}
                className="mt-4 text-sm underline text-[#3E2723] hover:text-[#C9A24D] transition-colors"
              >
                Back
              </button>
            </div>
          )}

          {/* OVERLAY (DESKTOP ONLY) */}
          <div className="hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden overlay-container transition-transform duration-700 z-20">
            <div className="relative -left-full w-[200%] h-full bg-gradient-to-br from-[#3E2723] to-[#C9A24D] text-white overlay transition-transform duration-700">
              <div className="absolute left-0 w-1/2 h-full flex flex-col items-center justify-center text-center px-10">
                <h2 className="text-3xl font-serif mb-4">Welcome Back!</h2>
                <p className="mb-6 text-white/80">Sign in to continue your journey</p>
                <button
                  onClick={() => setActive(false)}
                  className="border-2 border-white px-10 py-2 rounded-full hover:bg-white hover:text-[#3E2723] transition-all"
                >
                  SIGN IN
                </button>
              </div>

              <div className="absolute right-0 w-1/2 h-full flex flex-col items-center justify-center text-center px-10">
                <h2 className="text-3xl font-serif mb-4">Hello, Friend!</h2>
                <p className="mb-6 text-white/80">Create an account to get started</p>
                <button
                  onClick={() => setActive(true)}
                  className="border-2 border-white px-10 py-2 rounded-full hover:bg-white hover:text-[#3E2723] transition-all"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
