"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const UserNavbar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <nav className="w-full flex justify-center p-1 text-sm">
      <ul className="bg-muted flex rounded-md w-2/3 justify-evenly gap-1 p-1">
        <Link
          href="/dashboard/all-booking"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/dashboard/all-booking") &&
            "bg-white rounded-md text-black shadow-sm"
          }`}
        >
          Booking
        </Link>
        <Link
          href="/dashboard/book-resource"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/dashboard/book-resource") &&
            "bg-white rounded-md text-black shadow-sm"
          }`}
        >
          Book Resource
        </Link>
        <Link
          href="/dashboard/my-booking"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/dashboard/my-booking") &&
            "bg-white rounded-md text-black shadow-sm"
          }`}
        >
          My Booking
        </Link>
        <Link
          href="/dashboard/profile"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/dashboard/profile") &&
            "bg-white rounded-md text-black shadow-sm"
          }`}
        >
          Profile
        </Link>
      </ul>
    </nav>
  );
};

export default UserNavbar;
