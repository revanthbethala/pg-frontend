import { useState } from "react";

import { GuestForm } from "@/features/guests/components/GuestForm";
import { useUpdateGuest } from "@/features/guests/hooks/mutations/useUpdateGuest";
import { GuestFormType, guestType } from "@/features/guests/types/guest";

import { useImagePicker } from "@/hooks/useImagePicker";
import { getApiError } from "@/utils/getApiError";

type EditGuestProps = {
    guest: guestType;
    onClose: () => void;
};

export function EditGuest({
    guest,
    onClose,
}: EditGuestProps) {
    const { pickFromCamera, pickFromGallery } = useImagePicker();

    const [formError, setFormError] = useState("");

    const { mutateAsync, isPending } = useUpdateGuest(guest.roomId);

    const handleSubmit = async (
        payload: GuestFormType
    ) => {
        try {
            // const profile = payload?.profilePic?.uri;
            await mutateAsync({
                guestId: guest.id,
                guestData: {
                    ...payload,
                    // profilePic: profile ?? undefined,
                },
            });

            onClose();
        } catch (error) {
            setFormError(getApiError(error));
        }
    };

    return (
        <GuestForm
            title="Edit Guest"
            submitButtonTitle="Update Guest"
            defaultValues={
                {
                    name: guest.name,
                    phone: guest.phone,
                    aadhaar: guest.aadhaar,
                    address: guest.address,
                    joiningDate: new Date(guest.joiningDate)
                }
            }
            isPending={isPending}
            formError={formError}
            onSubmit={handleSubmit}
            onClose={onClose}
            onPickFromCamera={pickFromCamera}
            onPickFromGallery={pickFromGallery}
        />
    );
}