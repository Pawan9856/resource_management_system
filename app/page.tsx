import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user.role=== "user") redirect("/all-booking");
  else if (session?.user.role=== "admin") redirect("/all-user-booking");
  else redirect("/login");
}
