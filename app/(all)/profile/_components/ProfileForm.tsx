"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { logoutUser } from "@/server-action/user";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({ message: "This is not a valid email" }),
});

type FormDataType = z.infer<typeof FormSchema>;

const ProfileForm = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const form = useForm<FormDataType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || "",
        email: user.email || "",
      });
    }
  }, [user, form]);

  function onSubmit(data: FormDataType) {
    console.log(data);
  }
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="temp@example.com" {...field} />
              </FormControl>
              <FormDescription>Enter your Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          variant="default"
          type="button"
          onClick={() => console.log("hi")}
        >
          Change Password
        </Button>
        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
          <Button onClick={() => handleLogout()}>LogOut</Button>
        </div>
      </form>
    </Form>
  );
};
export default ProfileForm;
