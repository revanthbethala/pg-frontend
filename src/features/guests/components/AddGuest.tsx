import { useState } from "react";

import { GuestForm } from "@/features/guests/components/GuestForm";
import { useCreateGuest } from "@/features/guests/hooks/mutations/useCreateGuest";
import { GuestFormType } from "@/features/guests/types/guest.types";

import { useImagePicker } from "@/hooks/useImagePicker";
import { getApiError } from "@/utils/getApiError";

type AddGuestProps = {
    roomId: string;
    onClose: () => void;
};

export function AddGuest({
    roomId,
    onClose,
}: AddGuestProps) {
    const { pickFromCamera, pickFromGallery } = useImagePicker();

    const [formError, setFormError] = useState("");

    const { mutateAsync, isPending } = useCreateGuest(roomId);

    const handleSubmit = async (
        data: GuestFormType
    ) => {
        try {
            const payload = { ...data };

            // const profile = payload?.profilePic?.uri;
            await mutateAsync({
                // profilePic: profile || undefined,
                ...payload
            });

            onClose();
        } catch (error) {
            setFormError(getApiError(error));
        }
    };

    return (
        <GuestForm
            title="Add New Guest"
            submitButtonTitle="Add Guest"
            isPending={isPending}
            formError={formError}
            onSubmit={handleSubmit}
            onClose={onClose}
            onPickFromCamera={pickFromCamera}
            onPickFromGallery={pickFromGallery}
        />
    );
}