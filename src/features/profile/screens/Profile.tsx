import { Edit, LogOut, Trash2 } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import ErrorScreen from "@/components/ErrorScreen";
import Loader from "@/components/Loader";
import { ModalWrapper } from "@/components/ModalWrapper";
import { TopSafeScreen } from "@/components/TopSafeScreen";
import { useAuthContext } from "@/context/useAuthContext";
import { useGetProfile } from "@/features/profile/hooks/queries/useGetProfile";
import { profileStyles } from "@/features/profile/styles/profile.style";
import { colors } from "@/styles/colors";
import { commonStyles } from "@/styles/commonStyle";
import { capitalize } from "@/utils/capitalize";
import { showConfirmAlert } from "@/utils/confirmAlert";
import { getApiError } from "@/utils/getApiError";
import { showAlert } from "@/utils/showAlert";
import EditProfile from "../components/EditProfile";
import { useDeleteProfile } from "../hooks/mutations/useDeleteProfile";

export function Profile() {
    const { logout } = useAuthContext();

    const [showEditProfile, setShowEditProfile] = useState(false);

    const { mutateAsync } = useDeleteProfile();
    const {
        data: currentUser,
        isLoading,
        isError,
        error,
    } = useGetProfile();

    const handleLogout = () => {
        showConfirmAlert({
            title: "Logout",
            message: "Do you want to leave the application?",
            confirmText: "Logout",
            onConfirm: logout,
        });
    };
    const handleDeleteProfile = async () => {
        try {
            await mutateAsync();
        }
        catch (err) {
            showAlert("Account deletion failed", getApiError(err))
        }
    }
    const deleteAlert = () => {
        showConfirmAlert({
            title: "Delete Account",
            message: "Do you want to delete the account?",
            confirmText: "Delete",
            onConfirm: handleDeleteProfile,
        });
    }

    const handleEditProfile = () => {
        setShowEditProfile(true);
    };

    const handleCloseEditProfile = () => {
        setShowEditProfile(false);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <ErrorScreen message={error.message} />;
    }

    if (!currentUser) {
        return (
            <ErrorScreen message="Unable to load profile." />
        );
    }

    return (
        <TopSafeScreen >
            <View style={commonStyles.headerSection}>
                <Text style={commonStyles.containerTitle}>Account</Text>

            </View>
            <View style={commonStyles.bodySection}>
                <View style={profileStyles.card}>
                    <View style={profileStyles.avatar}>
                        <Text style={profileStyles.avatarText}>
                            {currentUser.email.charAt(0).toUpperCase()}
                        </Text>
                    </View>

                    {currentUser.name && (
                        <Text style={profileStyles.subHeading}>
                            {capitalize(currentUser.name)}
                        </Text>
                    )}

                    <Text style={[profileStyles.actionText, commonStyles.centeredText]}>
                        {currentUser.email}
                    </Text>
                </View>

                <View style={profileStyles.card}>
                    <Pressable
                        style={profileStyles.actionButton}
                        onPress={handleEditProfile}
                    >
                        <View style={profileStyles.actionContent}>
                            <Edit size={18} color={colors.text} />
                            <Text style={profileStyles.actionText}>
                                Edit Profile
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        style={profileStyles.actionButton}
                        onPress={handleLogout}
                    >
                        <View style={profileStyles.actionContent}>
                            <LogOut size={18} color={colors.destructive} />
                            <Text style={profileStyles.destructiveText}>
                                Logout
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable
                        style={profileStyles.actionButton}
                        onPress={deleteAlert}
                    >
                        <View style={profileStyles.actionContent}>
                            <Trash2 size={18} color={colors.destructive} />
                            <Text style={profileStyles.destructiveText}>
                                Delete Account
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <ModalWrapper
                    visible={showEditProfile}
                    onClose={handleCloseEditProfile}
                >
                    <EditProfile
                        profile={currentUser}
                        onClose={handleCloseEditProfile}
                    />
                </ModalWrapper>
            </View>
        </TopSafeScreen>
    );
}