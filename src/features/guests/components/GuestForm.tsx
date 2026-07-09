import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Camera, ImageIcon, User2Icon } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { BackButton } from "@/components/form/BackButton";
import ErrorText from "@/components/form/ErrorText";
import { FormInput } from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";

import { avatarStyle } from "@/styles/avatarStyle";
import { colors } from "@/styles/colors";
import { commonStyles } from "@/styles/commonStyle";
import { styles } from "@/styles/formStyle";

import { formatDate } from "@/utils/formatDate";

import { guestSchema } from "@/features/guests/schema/guestSchema";
import { guestFormStyles } from "@/features/guests/styles/guestForm.style";
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { GuestFormType } from "../types/guest";

type GuestFormProps = {
    title: string;
    submitButtonTitle: string;
    defaultValues?: GuestFormType;
    isPending: boolean;
    formError?: string;
    onSubmit: (data: GuestFormType) => Promise<void> | void;
    onClose: () => void;

    onPickFromCamera: () => Promise<any>;
    onPickFromGallery: () => Promise<any>;
};

export function GuestForm({
    title,
    submitButtonTitle,
    defaultValues,
    isPending,
    formError,
    onSubmit,
    onClose,
    onPickFromCamera,
    onPickFromGallery,
}: GuestFormProps) {
    const {
        control,
        watch,
        setValue,
        handleSubmit,
        formState: { isDirty },
    } = useForm<GuestFormType>({
        resolver: zodResolver(guestSchema),
        defaultValues,
    });

    const profilePic = watch("profilePic");

    const handleCamera = async () => {
        const [image] = await onPickFromCamera();

        if (image) {
            setValue("profilePic", image, {
                shouldDirty: true,
                shouldValidate: true,
            });
        }
    };

    const handleGallery = async () => {
        const [image] = await onPickFromGallery();

        if (image) {
            setValue("profilePic", image, {
                shouldDirty: true,
                shouldValidate: true,
            });
        }
    };

    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <View style={styles.form}>
            <Text style={styles.title}>{title}</Text>

            <View style={guestFormStyles.avatarSection}>
                {profilePic?.uri ? (
                    <Image
                        source={profilePic}
                        style={avatarStyle.img}
                        resizeMode="cover"
                    />
                ) : (
                    <User2Icon
                        color={colors.inactive}
                        size={64}
                        style={avatarStyle.avatar}
                    />
                )}

                <View style={guestFormStyles.imageActions}>
                    <TouchableOpacity
                        style={guestFormStyles.iconButton}
                        onPress={handleCamera}
                    >
                        <Camera
                            size={18}
                            color={colors.primary}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={guestFormStyles.iconButton}
                        onPress={handleGallery}
                    >
                        <ImageIcon
                            size={18}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <FormInput
                control={control}
                name="name"
                placeholder="Guest Name"
            />

            <FormInput
                control={control}
                name="phone"
                placeholder="Phone Number"
                keyboardType="phone-pad"
                maxLength={10}
            />

            <FormInput
                control={control}
                name="aadhaar"
                placeholder="Aadhaar Number"
                keyboardType="number-pad"
                maxLength={12}
            />

            <FormInput
                control={control}
                name="address"
                placeholder="Address"
                multiline
                textAlignVertical="top"
                style={guestFormStyles.addressInput}
            />

            {/* <Controller
                control={control}
                name="joiningDate"
                render={({ field, fieldState }) => (
                    <>
                        <TouchableOpacity
                            style={[
                                styles.input,
                                guestFormStyles.dateInput,
                            ]}
                            onPress={() => setOpenDatePicker(true)}
                        >
                            <View style={commonStyles.actionContainer}>
                                <CalendarDays
                                    size={20}
                                    color={colors.primary}
                                />

                                <Text
                                    style={{
                                        color: field.value
                                            ? colors.text
                                            : colors.inactive,
                                    }}
                                >
                                    {field.value
                                        ? formatDate(field.value)
                                        : "Select Joining Date"}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <DatePicker
                            modal
                            open={openDatePicker}
                            date={field.value ?? new Date()}
                            mode="date"
                            maximumDate={new Date()}
                            title="Select Joining Date"
                            confirmText="Confirm"
                            cancelText="Cancel"
                            onConfirm={(date) => {
                                setOpenDatePicker(false);
                                field.onChange(date);
                            }}
                            onCancel={() => setOpenDatePicker(false)}
                        />

                        <ErrorText message={fieldState.error?.message} />
                    </>
                )}
            /> */}



            <Controller
                control={control}
                name="joiningDate"
                render={({ field, fieldState }) => (
                    <>
                        <TouchableOpacity
                            style={[styles.input, guestFormStyles.dateInput]}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <View style={commonStyles.actionContainer}>
                                <CalendarDays
                                    size={20}
                                    color={colors.primary}
                                />

                                <Text
                                    style={{
                                        color: field.value
                                            ? colors.text
                                            : colors.inactive,
                                    }}
                                >
                                    {field.value
                                        ? formatDate(field.value)
                                        : "Select Joining Date"}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {showDatePicker && (
                            <DateTimePicker
                                value={field.value ?? new Date()}
                                mode="date"
                                display="default"
                                maximumDate={new Date()}
                                onChange={(
                                    event: DateTimePickerEvent,
                                    selectedDate?: Date
                                ) => {
                                    setShowDatePicker(false);

                                    if (
                                        event.type === "set" &&
                                        selectedDate
                                    ) {
                                        field.onChange(selectedDate);
                                    }
                                }}
                            />
                        )}

                        <ErrorText message={fieldState.error?.message} />
                    </>
                )}
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