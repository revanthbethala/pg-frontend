import { useState } from "react";

import { getApiError } from "@/utils/getApiError";

import { useUpdateRoom } from "@/features/rooms/hooks/mutations/useUpdateRoom";
import {
    RoomFormType,
    roomType
} from "@/features/rooms/types/room.types";
import { RoomForm } from "./RoomForm";

type Props = {
    room: roomType;
    onClose: () => void;
};

export function EditRoom({
    room,
    onClose,
}: Props) {
    const { mutateAsync, isPending } = useUpdateRoom(room.branchId);

    const [formError, setFormError] = useState("");

    const handleSubmit = async (
        data: RoomFormType,
    ) => {


        try {
            setFormError("");

            await mutateAsync({
                roomId: room.id,
                roomData: {
                    branchId: room.branchId,
                    roomNumber: data.roomNumber,
                    capacity: data.capacity,
                    rent: data.rent,
                    maintainance: data.maintainance,
                },
            });

            onClose();
        } catch (error) {
            setFormError(getApiError(error));
        }
    };

    return (
        <RoomForm
            title="Edit Room"
            submitButtonTitle="Update Room"
            defaultValues={{
                roomNumber: room.roomNumber,
                capacity: (room.capacity),
                rent: (room.rent),
                maintainance: room.maintainance,
            }}
            isPending={isPending}
            formError={formError}
            onSubmit={handleSubmit}
            onClose={onClose}
        />
    );
}