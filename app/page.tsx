import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await auth();
  if (session?.user) redirect("/dashboard");
  else redirect("/login");
  
  return (
    <div className="flex justify-center items-center h-dvh">
      <Button >Button</Button>
    </div>
  );
}
