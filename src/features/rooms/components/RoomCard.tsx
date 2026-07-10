import ActionButton from "@/components/ActionButton";
import { PopupMenu } from "@/components/PopUpMenu";
import { roomType } from "@/features/rooms/types/room.types";
import { cardStyle } from "@/styles/cardStyle";
import { commonStyles } from "@/styles/commonStyle";
import { PgStackParamList } from "@/types/navigation";
import { showConfirmAlert } from "@/utils/confirmAlert";
import { showAlert } from "@/utils/showAlert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { deleteRoom } from "../../../api/room.api";

export function RoomCard({ room, onEdit }: { room: roomType, onEdit: (room: roomType) => void }) {
    const navigation = useNavigation<NativeStackNavigationProp<PgStackParamList, 'Guests'>>();
    const handlePress = () => {
        if (room.maintainance) {
            showAlert("Room Under Maintainance", "This room is under maintainance Cant add new guests");
            return;
        }
        navigation.navigate('Guests', { roomId: room.id, roomNumber: room.roomNumber, capacity: room.capacity });
    }
    const handleEdit = () => {
        onEdit(room)
    };
    const deleteRoomFn = async () => {
        try {
            await deleteRoom(room.id);
        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = () => {
        showConfirmAlert({
            title: "Delete Room", message: `Are you sure you want to delete "${room.roomNumber}"?`,
            confirmText: "Delete", onConfirm: deleteRoomFn
        })
    };
    const actions = [{ label: "Edit", onPress: handleEdit }, { label: "Delete", destructive: true, onPress: handleDelete }];

    return (
        <View style={[cardStyle.card]} key={room.id}>
            <View style={cardStyle.cardHeader}>
                <Text style={cardStyle.title}>Room No. {room.roomNumber}</Text>
                <PopupMenu actions={actions} />
            </View>
            <Text style={cardStyle.text}>Capacity: {room.capacity}</Text>
            <Text style={cardStyle.text}>
                Rent: ₹ {room.rent}
            </Text>
            <Text style={cardStyle.text}>
                Room Availability:
                <Text style={[!room.maintainance ? commonStyles.statusActive : commonStyles.statusInactive,]}>
                    {room.maintainance ? " Under Maintainance" : " Available"}
                </Text>
            </Text>

            <ActionButton title="View Details" onPress={handlePress} />

        </View>
    )
}