"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";
import { loginUser } from "@/server-action/user";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (FormData: FormData) => {
    console.log(FormData);
    const email = FormData.get("email") as string | undefined;
    const password = FormData.get("password") as string | undefined;
    if (!email || !password) {
      toast.error("please provide all fields");
      return;
    }
    const toastId = toast.loading("Logging in...");
    const error = await loginUser(email, password);
    if (!error) {
      toast.success("Login successful", { id: toastId });
      router.refresh();
    } else {
      toast.error(String(error), { id: toastId });
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="*******"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
