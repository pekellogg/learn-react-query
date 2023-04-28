import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser } from "../../api/users";

export default function useNewUserMutation() {
  const queryClient = useQueryClient();

  const newUser = useMutation({
    mutationFn: (user) => postUser({ user }),
    onSuccess: () => {
      // invalidate queries to queue update of cache store
      queryClient.invalidateQueries(["users"])
    }
  })
  
  return newUser;
}