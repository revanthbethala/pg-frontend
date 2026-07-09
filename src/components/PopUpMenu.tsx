import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,

} from "react-native-popup-menu";
import { MoreVertical } from "lucide-react-native";
import { colors } from "@/styles/colors";

export type PopupMenuAction = {
    label: string;
    onPress: () => void;
    destructive?: boolean;
};

type PopupMenuProps = {
    actions: PopupMenuAction[];
};

export function PopupMenu({
    actions }: PopupMenuProps) {
    return (
        <Menu>
            <MenuTrigger>
                <MoreVertical
                    size={20}
                    color={colors.text}
                />
            </MenuTrigger>

            <MenuOptions
                customStyles={{
                    optionsContainer: {
                        borderRadius: 8,
                        paddingVertical: 4,
                        backgroundColor: colors.background,
                        elevation: 5,
                    },
                }}
            >
                {actions.map((action) => (
                    <MenuOption
                        key={action.label}
                        onSelect={action.onPress}
                        customStyles={{
                            optionWrapper: {
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                            },
                            optionText: {
                                color: action.destructive
                                    ? colors.error
                                    : colors.text,
                                fontSize: 15,
                            },
                        }}
                        text={action.label}
                    />
                ))}
            </MenuOptions>
        </Menu>
    );
}