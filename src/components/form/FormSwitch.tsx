import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
} from "react-hook-form";
import { Switch, SwitchProps, Text, View } from "react-native";

import ErrorText from "@/components/form/ErrorText";
import { styles } from "@/styles/formStyle";

type FormSwitchProps<T extends FieldValues> = SwitchProps & {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
};

export function FormSwitch<T extends FieldValues>({
    control,
    name,
    label,
    ...switchProps
}: FormSwitchProps<T>) {
    return (
        <>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>{label}</Text>

                <Controller
                    control={control}
                    name={name}
                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                        <>
                            <Switch
                                {...switchProps}
                                value={Boolean(value)}
                                onValueChange={onChange}
                            />
                            <ErrorText message={error?.message} />
                        </>
                    )}
                />
            </View>
        </>
    );
}