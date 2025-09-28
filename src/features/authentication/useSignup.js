import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "User created successfully, please check your email for confirmation"
      );
    }, 
    onError: () => {
      toast.error("Error creating user");
    },
  });

  return { signup, isPending };
}
