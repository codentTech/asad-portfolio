"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    );

    if (signInError) {
      toast.error(
        signInError.message || "Failed to login. Please check your credentials."
      );
      setLoading(false);
      return;
    }

    if (data.user) {
      toast.success("Login successful! Redirecting...");
      router.push("/admin/blog");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#112240] border border-[#233554] rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#ccd6f6] mb-2">
              Admin Login
            </h1>
            <p className="text-[#8892b0] font-mono text-sm">
              Access the admin dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-[#ccd6f6] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors font-mono text-sm"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-mono text-[#ccd6f6] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] transition-colors font-mono text-sm"
                placeholder="••••••••"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-3 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded-lg transition-all hover:bg-[#52e0c4] disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
