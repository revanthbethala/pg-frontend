import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "@/styles/formStyle";
import ErrorText from "@/components/form/ErrorText";

type FormInputProps<T extends FieldValues> = TextInputProps & {
    control: Control<T>;
    name: FieldPath<T>;
};

export function FormInput<T extends FieldValues>({
    control,
    name,
    ...props
}: FormInputProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <>
                    <TextInput
                        {...props}
                        style={[styles.input, props.style]}
                        value={field.value?.toString() ?? ""}
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                    />

                    <ErrorText message={fieldState.error?.message} />
                </>
            )}
        />
    );
}