import { Pressable, Text, View } from "react-native";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";

import SubmitButton from "@/components/form/SubmitButton";
import { FormInput } from "@/components/form/FormInput";
import ErrorText from "@/components/form/ErrorText";

import { styles } from "@/styles/formStyle";
import { AuthStackParamList } from "@/types/navigation";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { registrationSchema } from "@/features/auth/schema/authSchema";
import { registerType } from "@/features/auth/types/auth";
import { getApiError } from "@/utils/getApiError";

export function Registration() {
    const navigation =
        useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const { mutateAsync, isPending } = useRegister();

    const {
        control,
        setError,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<registerType>({
        resolver: zodResolver(registrationSchema),
    });

    const onSubmit = async (data: registerType) => {
        if (isSubmitSuccessful) {
            try {
                await mutateAsync(data);
            } catch (err) {
                setError("form", { message: getApiError(err) });
                return;
            }

            navigation.navigate("Login");
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.form, styles.authForm]}>
                <Text style={styles.title}>Registration</Text>

                <FormInput
                    control={control}
                    name="name"
                    placeholder="Name"
                />

                <FormInput
                    control={control}
                    name="email"
                    placeholder="Email"
                />

                <FormInput
                    control={control}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                />

                <FormInput
                    control={control}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                />

                <SubmitButton
                    title="Register"
                    loading={isPending}
                    onPress={handleSubmit(onSubmit)}
                />

                <View style={styles.redirect}>
                    <Text>Already have an account?</Text>

                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.redirectText}>Login</Text>
                    </Pressable>
                </View>

                <ErrorText message={errors.form?.message} />
            </View>
        </View>
    );
}