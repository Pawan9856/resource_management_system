"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNavbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="w-full flex justify-center p-1 text-sm">
      <ul className="bg-muted flex rounded-md w-2/3 justify-evenly gap-1 p-1">
        <Link
          href="/all-booking"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/all-booking") &&
            "bg-white rounded-md text-primary shadow-sm"
          }`}
        >
          All Booking
        </Link>
        <Link
          href="/manage-requests"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/manage-requests") &&
            "bg-white rounded-md text-primary shadow-sm"
          }`}
        >
          Requests
        </Link>
        <Link
          href="/manage-users"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/manage-users") &&
            "bg-white rounded-md text-primary shadow-sm"
          }`}
        >
          Users
        </Link>
        <Link
          href="/profile"
          className={`text-muted-foreground py-2 w-1/4 text-center ${
            currentPath.startsWith("/profile") &&
            "bg-white rounded-md text-primary shadow-sm"
          }`}
        >
          Profile
        </Link>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
