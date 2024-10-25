"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // Check the session status
    if (status === "loading") {
      return;
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
    // Redirect if user is logged in
    if (session?.user) {
      router.push("/all-booking");
    }
  }, [session, status, router]);

  return <p>Loading...</p>;
}
