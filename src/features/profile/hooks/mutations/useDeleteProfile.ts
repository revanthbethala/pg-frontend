import { useAuthContext } from "@/context/useAuthContext"
import { deleteUser } from "@/features/profile/api/profile.api"
import { useMutation } from "@tanstack/react-query"

export const useDeleteProfile = () => {
    const { logout } = useAuthContext();
    const query = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            logout()
        }
    })
    return query;
}