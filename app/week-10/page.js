"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-emerald-200 p-8 text-center">
      {!user && (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to the Shopping List App
          </h1>
          <button
            onClick={handleSignIn}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            Sign in with GitHub
          </button>
        </>
      )}

      {user && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome, {user.displayName} ({user.email})
          </h2>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Sign Out
          </button>

          <div className="mt-6">
            <Link
              href="/week-9/shopping-list"
              className="bg-green-400 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-green-500 transition"
            >
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
