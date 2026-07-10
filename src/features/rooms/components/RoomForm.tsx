import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";

import { BackButton } from "@/components/form/BackButton";
import ErrorText from "@/components/form/ErrorText";
import { FormInput } from "@/components/form/FormInput";
import { FormSwitch } from "@/components/form/FormSwitch";
import SubmitButton from "@/components/form/SubmitButton";
import { styles } from "@/styles/formStyle";

import { roomSchema } from "@/features/rooms/schema/roomSchema";
import { RoomFormType } from "@/features/rooms/types/room.types";

type RoomFormProps = {
    title: string;
    submitButtonTitle: string;
    defaultValues?: RoomFormType;
    isPending: boolean;
    formError?: string;
    onSubmit: (data: RoomFormType) => Promise<void> | void;
    onClose: () => void;
};

export function RoomForm({
    title,
    submitButtonTitle,
    defaultValues,
    isPending,
    formError,
    onSubmit,
    onClose,
}: RoomFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isDirty },
    } = useForm<RoomFormType>({
        resolver: zodResolver(roomSchema) as any,
        defaultValues,
    });

    return (
        <View style={styles.form}>
            <Text style={styles.title}>{title}</Text>

            <FormInput
                control={control}
                name="roomNumber"
                placeholder="Room Number"
            />

            <FormInput
                control={control}
                name="capacity"
                placeholder="Capacity"
                keyboardType="numeric"
            />

            <FormInput
                control={control}
                name="rent"
                placeholder="Rent"
                keyboardType="numeric"
            />

            <FormSwitch
                control={control}
                name="maintainance"
                label="Under maintainance?"
            />

            <SubmitButton
                title={submitButtonTitle}
                loading={isPending}
                onPress={handleSubmit(onSubmit)}
            />

            <BackButton
                onClose={onClose}
                isDirty={isDirty}
            />

            <ErrorText message={formError} />
        </View>
    );
}