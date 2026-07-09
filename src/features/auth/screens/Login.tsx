import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Controller, useForm } from "react-hook-form";
import {
    Pressable,
    Text,
    TextInput,
    View
} from "react-native";

import ErrorText from "@/components/form/ErrorText";
import SubmitButton from "@/components/form/SubmitButton";
import { styles } from "@/styles/formStyle";
import { AuthStackParamList } from "@/types/navigation";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { loginSchema } from "@/features/auth/schema/authSchema";
import { loginType, userType } from "@/features/auth/types/auth";

export function Login() {
    const navigation =
        useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const {
        control,
        setError,
        clearErrors,
        handleSubmit,
        formState: { errors },
    } = useForm<userType>({
        defaultValues: {
            email: "revanth@gmail.com",
            password: "revanthb",
        },
        mode: "onChange",
        resolver: zodResolver(loginSchema),
    });

    const { mutateAsync, isPending } = useLogin();

    const onSubmit = async (data: loginType) => {
        clearErrors();

        try {
            await mutateAsync(data);
        } catch (error: any) {
            setError("form", {
                message:
                    error?.response?.data?.message ??
                    "Invalid email or password",
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.form, styles.authForm]}>
                <Text style={styles.title}>Login</Text>

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="Email"
                            value={value}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoComplete="email"
                            textContentType="emailAddress"
                            style={styles.input}
                            onChangeText={onChange}
                        />
                    )}
                />

                <ErrorText message={errors.email?.message} />

                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            value={value}
                            style={styles.input}
                            onChangeText={onChange}
                        />
                    )}
                />

                <ErrorText message={errors.password?.message} />
                <ErrorText message={errors.form?.message} />
                <SubmitButton title="Login" loading={isPending} onPress={handleSubmit(onSubmit)} />

                <View style={styles.redirect}>
                    <Text>Don't have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Registration")}>
                        <Text style={styles.redirectText}>Register Here</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}