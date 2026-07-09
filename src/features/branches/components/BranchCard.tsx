import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import { cardStyle } from "@/styles/cardStyle";
import { commonStyles } from "@/styles/commonStyle";
import { PgStackParamList } from "@/types/navigation";
import { capitalize } from "@/utils/capitalize";
import { getApiError } from "@/utils/getApiError";

import ActionButton from "@/components/ActionButton";
import { PopupMenu } from "@/components/PopUpMenu";
import { useDeleteBranch } from "@/features/branches/hooks/mutations/useDeleteBranch";
import { branchType } from "@/features/branches/types/branch";
import { showConfirmAlert } from "@/utils/confirmAlert";
import { showAlert } from "@/utils/showAlert";

type NavigationProp = NativeStackNavigationProp<PgStackParamList>;

type Props = {
    branch: branchType;
    onEdit: (branch: branchType) => void
};

export function BranchCard({ branch, onEdit }: Props) {
    const navigation = useNavigation<NavigationProp>();
    const handleEdit = () => {
        onEdit(branch)
    };
    const {
        mutateAsync: deleteBranch } = useDeleteBranch();

    const handlePress = () => {
        navigation.getParent()?.navigate("Rooms", {
            branchId: branch.id,
            branchName: branch.branchName,
        });
    };

    const deleteBranchFn = async () => {
        try {
            await deleteBranch(branch.id);
        } catch (err) {
            showAlert("Delete Failed", getApiError(err))

        }
    }


    const handleDelete = () => {
        showConfirmAlert({
            title: "Delete Branch", message: `Are you sure you want to delete "${branch.branchName}"?`,
            confirmText: "Delete", onConfirm: deleteBranchFn
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
            <View style={cardStyle.cardHeader}>
                <Text style={cardStyle.title}>
                    {capitalize(branch.branchName)}
                </Text>

                <PopupMenu actions={actions} />
            </View>

            <View style={cardStyle.contentCard}>

                <Text
                    style={cardStyle.text}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                >
                    Address: {branch.address}
                </Text>
                <Text style={cardStyle.text}>
                    City: {capitalize(branch.city)}
                </Text>


                <Text style={cardStyle.text}>
                    Branch Status:
                    <Text style={[branch.isActive ? commonStyles.statusActive : commonStyles.statusInactive,]}>
                        {branch.isActive ? " Active" : " Not Active"}
                    </Text>
                </Text>

                <ActionButton title="View Details" onPress={handlePress} />

            </View>
        </View>
    );
}