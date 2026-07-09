import { useState } from "react";

import { getApiError } from "@/utils/getApiError";

import { useCreateRoom } from "@/features/rooms/hooks/mutations/useCreateRoom";
import { RoomRequestType } from "@/features/rooms/types/room";
import { RoomForm } from "./RoomForm";

type Props = {
    branchId: string;
    onClose: () => void;
};

export function AddRoom({
    branchId,
    onClose,
}: Props) {
    const { mutateAsync, isPending } = useCreateRoom(branchId);

    const [formError, setFormError] = useState("");

    const handleSubmit = async (data: RoomRequestType) => {
        try {
            setFormError("");

            await mutateAsync(data);

            onClose();
        } catch (error) {
            setFormError(getApiError(error));
        }
    };

    return (
        <RoomForm
            title="Add New Room"
            submitButtonTitle="Create Room"
            isPending={isPending}
            formError={formError}
            onSubmit={handleSubmit}
            onClose={onClose}
        />
    );
}