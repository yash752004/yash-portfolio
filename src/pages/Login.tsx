import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "pinak1234") {
      sessionStorage.setItem("adminAuth", "true");
      toast.success("Login successful");
      navigate("/portal");
    } else {
      toast.error("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden font-sans selection:bg-primary-500/30">
      {/* Decorative Light Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-100/40 blur-[100px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-100/40 blur-[100px]" />
      </div>

      <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-primary-100/50 text-primary-600">
            <LogOut size={32} className="ml-1" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Admin Login</h1>
          <p className="text-slate-500 font-medium text-sm">Please authenticate to access the dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">Master Password</label>
            <div className="relative group">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 rounded-2xl bg-slate-50 border-slate-200 px-5 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all font-medium"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400 hover:text-primary-600 transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider">{showPassword ? "Hide" : "Show"}</span>
                </button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full rounded-2xl h-14 text-lg font-bold bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:shadow-primary-600/30 active:scale-[0.98]">
            Sign In
          </Button>

          <button type="button" onClick={() => navigate("/")} className="w-full text-center text-sm font-bold text-slate-400 hover:text-slate-600 mt-4 transition-colors">
            Return to Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
