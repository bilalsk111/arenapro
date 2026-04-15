import React from "react";
import { Navigate } from "react-router-dom";
import { loginWithGoogle } from "../api/google.auth.api";
import { Shield } from "lucide-react";

export default function Login() {
  if (localStorage.getItem("token")) return <Navigate to="/" replace />;

  return (
    <div className="h-screen flex items-center justify-center bg-[#090909] text-white">
      <div className="w-full max-w-sm p-8 space-y-10">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-white mx-auto rounded-2xl flex items-center justify-center">
            <Shield size={32} className="text-black" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Arena Access</h1>
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Verify Identity to Proceed</p>
          </div>
        </div>

        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-4 bg-white text-black py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all active:scale-[0.98]"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="currentColor" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
          </svg>
          Google Authorize
        </button>

        <div className="pt-10 text-center border-t border-white/5">
          <p className="text-[10px] text-zinc-600 font-mono uppercase">Secure Encrypted Handshake Ready</p>
        </div>
      </div>
    </div>
  );
}