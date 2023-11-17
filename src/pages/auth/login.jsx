import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AuthLayout from "@/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { LoadingIcon } from "@/components/icons/loading-icon";
import { InputPassword } from "@/components/ui/input-password";
import { apiLogin } from "@/apis/auth";
import { useAuthStore } from "@/stores/auth-store";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/stores/app-store";
import { toast } from "react-toastify";

const formSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty().min(6),
});

export default function Login() {
  const { isLoading, setIsLoading } = useAppStore();

  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    // console.log(values);
    try {
      setIsLoading(true);
      const response = await apiLogin(values);
      setIsLoggedIn(response.data.user);
      localStorage.setItem("token", response.data.token);
      form.reset();
      setIsLoading(false);
      navigate("/");
      toast.success("Đăng nhập thành công");
    } catch (error) {
      if (error.status === 401) {
        toast.error(error.response.data.message);
      } else {
        console.log("login", error);
        toast.error("Lỗi không đăng nhập được");
      }
      setIsLoading(false);
    }
  }

  return (
    <AuthLayout>
      <div className="grid gap-6 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-1 mb-3">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <InputPassword {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button disabled={isLoading} size="lg" className="text-whiter">
                {isLoading && (
                  <LoadingIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
}
