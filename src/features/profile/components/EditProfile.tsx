import React from "react";
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BackButton } from "@/components/form/BackButton";
import { FormInput } from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";
import { getApiError } from "@/utils/getApiError";
import { styles } from "@/styles/formStyle";

import { profileSchema } from "../schema/profileSchema";
import { useUpdateProfile } from "../hooks/mutations/useUpdateProfile";
import ErrorText from "@/components/form/ErrorText";
import z from "zod";
import { profileType } from "@/features/profile/types/profile.types";

type EditProfileProps = {
    onClose: () => void;
    profile: profileType
};



const EditProfile = ({ onClose, profile }: EditProfileProps) => {
    const { mutateAsync, isPending } = useUpdateProfile();
    type ProfileForm = z.infer<typeof profileSchema>
    const {
        control,
        handleSubmit,
        setError,

        formState: { isDirty, errors },
    } = useForm<ProfileForm>({
        defaultValues: {
            name: profile?.name ?? "",
            // email: profile?.email ?? ""
        },
        resolver: zodResolver(profileSchema),
    });

    const onSubmit = async (data: ProfileForm) => {
        try {
            await mutateAsync(data);
            onClose();
        } catch (err) {
            setError("form", {
                message: getApiError(err),
            });
        }
    };

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Edit Profile</Text>

            <FormInput
                control={control}
                name="name"
                placeholder="Name"
            />


            {/* <FormInput
                control={control}
                name="email"
                placeholder="Email"
            /> */}
            <SubmitButton
                title="Edit Profile"
                loading={isPending}
                onPress={handleSubmit(onSubmit)}
            />

            <BackButton
                onClose={onClose}
                isDirty={isDirty}
            />
            {errors.form?.message && <ErrorText message={errors.form.message} />}
        </View>
    );
};

export default EditProfile;