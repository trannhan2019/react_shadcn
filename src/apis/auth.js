import axiosClient from "@/lib/axiosClient";

export const apiLogin = (data) =>
  axiosClient({
    url: "/auth/login",
    method: "post",
    data,
  });
