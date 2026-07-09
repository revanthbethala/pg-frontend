import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";

import { BackButton } from "@/components/form/BackButton";
import ErrorText from "@/components/form/ErrorText";
import { FormInput } from "@/components/form/FormInput";
import { FormSwitch } from "@/components/form/FormSwitch";
import SubmitButton from "@/components/form/SubmitButton";
import { styles } from "@/styles/formStyle";
import { branchSchema } from "@/features/branches/schema/branchSchema";
import { branchFormType } from "@/features/branches/types/branch";

type BranchFormProps = {
    title: string;
    submitButtonTitle: string;
    defaultValues?: branchFormType;
    isPending: boolean;
    formError?: string;
    onSubmit: (data: branchFormType) => Promise<void> | void;
    onClose: () => void;
};

export function BranchForm({
    title,
    submitButtonTitle,
    defaultValues,
    isPending,
    formError,
    onSubmit,
    onClose,
}: BranchFormProps) {
    const {
        control,
        handleSubmit,
        formState: { isDirty },
    } = useForm<branchFormType>({
        resolver: zodResolver(branchSchema),
        defaultValues,
    });

    return (
        <View style={styles.form}>
            <Text style={styles.title}>{title}</Text>

            <FormInput
                control={control}
                name="branchName"
                placeholder="Branch Name"
            />

            <FormInput
                control={control}
                name="city"
                placeholder="Branch City"
            />

            <FormInput
                control={control}
                name="address"
                placeholder="Branch Address"
            />

            <FormSwitch
                control={control}
                name="isActive"
                label="Is Branch in operation?"
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