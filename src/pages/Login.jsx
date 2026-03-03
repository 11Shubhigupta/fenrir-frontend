import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import metaLogo from "../assets/meta.png";
export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">

     {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f2d33] to-[#0CC8A8]" />
      <div className="absolute bottom-[-300px] right-[-300px] w-[1100px] h-[1100px] bg-[radial-gradient(circle,#ff7a18,transparent_65%)] opacity-80 blur-[40px]" />

      <div className="relative z-10 flex min-h-screen">

        {/* ================= LEFT SIDE (EXACT CONTENT) ================= */}
        <div className="w-1/2 p-24 flex flex-col justify-center text-white">

          <div className="flex items-center gap-2 mb-20">
            <div className="w-3 h-3 bg-[#0CC8A8] rounded-full"></div>
            <span className="text-lg font-semibold tracking-wide">aps</span>
          </div>

          <h1 className="text-[42px] font-semibold leading-tight mb-10">
            Expert level Cybersecurity <br />
            in <span className="text-[#0CC8A8]">hours</span> not weeks.
          </h1>

          <div className="space-y-4 text-gray-300 text-sm">
            <p>✓ Effortlessly spider and map targets to uncover hidden security flaws</p>
            <p>✓ Deliver high-quality, validated findings in hours, not weeks.</p>
            <p>✓ Generate professional, enterprise-grade security reports automatically.</p>
          </div>

          {/* Trustpilot Section */}
          <div className="mt-16 text-sm">
            <div className="flex items-center gap-2 text-[#0CC8A8]">
              <Star size={16} fill="#0CC8A8" strokeWidth={0} />
              <span>Trustpilot</span>
            </div>
            <p className="text-gray-400 mt-1">
              Rated 4.5/5.0 <span className="text-gray-500">(100k+ reviews)</span>
            </p>
          </div>

        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="w-1/2 flex items-center justify-center">

          <div className="bg-white px-10 py-4 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] w-[420px]">

            <h2 className="text-2xl font-semibold text-center mb-2">
              {isLogin ? "Log in" : "Sign up"}
            </h2>

            <p className="text-center text-sm text-gray-500 mb-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#0CC8A8] cursor-pointer font-medium"
              >
                {isLogin ? "Sign up" : "Log in"}
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {!isLogin && (
                <>
                  <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CC8A8] outline-none" placeholder="First name*" />
                  <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CC8A8] outline-none" placeholder="Last name*" />
                </>
              )}

              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CC8A8] outline-none" placeholder="Email address*" />
              <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CC8A8] outline-none" placeholder="Password (8+ characters)*" />

              {!isLogin && (
                <div className="flex items-start gap-2 text-xs text-gray-500">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I agree to Aps’s{" "}
                    <span className="text-[#0CC8A8]">Terms & Conditions</span>{" "}
                    and acknowledge the{" "}
                    <span className="text-[#0CC8A8]">Privacy Policy</span>
                  </span>
                </div>
              )}

              <button className="w-full bg-[#0CC8A8] text-white py-3 rounded-full font-medium hover:opacity-90 transition">
                {isLogin ? "Log in" : "Create account"}
              </button>
            </form>

            {/* =====  ICONS ===== */}
            <div className="flex gap-4 mt-6">

              {/* Apple */}
              <button className="flex-1 bg-black text-white py-2 rounded-full flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-5 h-5 invert"
                />
              </button>

              {/* Google */}
              <button className="flex-1 bg-gray-100 py-1 rounded-full flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                  alt="Google"
                  className="w-10 h-10"
                />
              </button>

              {/* Meta */}
             <button className="flex-1 bg-[#3B82F6] py-1 rounded-full flex items-center justify-center">
                <img
                  
                     src={metaLogo}
                  className="w-10 h-10"
                />
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}