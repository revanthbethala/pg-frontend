import ActionButton from "@/components/ActionButton";
import { PopupMenu } from "@/components/PopUpMenu";
import { guestType } from "@/features/guests/types/guest.types";
import { avatarStyle } from "@/styles/avatarStyle";
import { cardStyle } from "@/styles/cardStyle";
import { colors } from "@/styles/colors";
import { PgStackParamList } from "@/types/navigation";
import { capitalize } from "@/utils/capitalize";
import { showConfirmAlert } from "@/utils/confirmAlert";
import { formatDate } from "@/utils/formatDate";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "lucide-react-native";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useDeleteGuest } from "../hooks/mutations/useDeleteGuest";
import Loader from "@/components/Loader";
export function GuestCard({ guest, onEdit }: { guest: guestType, onEdit: (guest: guestType) => void }) {
    const navigation = useNavigation<NativeStackNavigationProp<PgStackParamList, 'Guests'>>();
    const [hasErr, setHasErr] = useState(Boolean(!guest?.profilePic));
    const handlePress = () => {
        navigation.navigate('GuestDetails', { guestId: guest.id, guestName: guest.name });
    };
    const { mutateAsync, isPending } = useDeleteGuest(guest.roomId)
    console.log("profile", guest?.profilePic);
    const handleEdit = () => {
        onEdit(guest)
    };
    const deleteRoomFn = async () => {
        try {
            await mutateAsync(guest.id);
        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = () => {
        showConfirmAlert({
            title: "Delete Room", message: `Are you sure you want to delete "${guest.name}"?`,
            confirmText: "Delete", onConfirm: deleteRoomFn
        })
    };
    const actions = [
        {
            label: "Edit",
            onPress: handleEdit,
        },
        {
            label: "Delete",
            destructive: true,
            onPress: handleDelete,
        },
    ];

    return (
        <View style={cardStyle.card}>
            {isPending ? (
                <Loader message="Deleting" />
            ) : (
                <>
                    <View style={cardStyle.cardHeader}>
                        <Text style={cardStyle.title}>
                            {capitalize(guest.name)}
                        </Text>

                        <PopupMenu actions={actions} />
                    </View>

                    <View style={cardStyle.imageCard}>
                        <View style={avatarStyle.imageContainer}>
                            {hasErr ? (
                                <User
                                    color={colors.inactive}
                                    size={50}
                                    style={avatarStyle.avatar}
                                />
                            ) : (
                                <Image
                                    source={{ uri: guest.profilePic }}
                                    onError={() => setHasErr(true)}
                                    style={avatarStyle.img}
                                    resizeMode="cover"
                                />
                            )}
                        </View>

                        <View style={cardStyle.contentSection}>
                            <Text style={cardStyle.text}>
                                Phone: {guest.phone}
                            </Text>

                            <Text style={cardStyle.text}>
                                Joining Date: {formatDate(guest.joiningDate)}
                            </Text>

                            <ActionButton
                                title="View Details"
                                onPress={handlePress}
                            />
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}