import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { showConfirmAlert } from "@/utils/confirmAlert";

type ModalWrapperProps = {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    animationIn?: "slideInUp" | "fadeIn";
    animationOut?: "slideOutDown" | "fadeOut";
};
const styles = StyleSheet.create({
    modal: {
        margin: 0,
        // justifyContent: 'flex-end'

    },

    content: {
        // height: '70%',
        justifyContent: 'space-between',
        backgroundColor: "white",
        borderRadius: 20,
        margin: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

});

export function ModalWrapper({
    visible,
    onClose,
    children,
    animationIn = "slideInUp",
    animationOut = "slideOutDown",
}: ModalWrapperProps) {
    const handleClose = () => {
        showConfirmAlert({
            title: 'Leave',
            message: 'You have unsaved changes. Do you want to leave?',
            confirmText: 'Leave',
            cancelText: 'Stay',
            onConfirm: onClose,
        });
    }
    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            animationIn={animationIn}
            animationOut={animationOut}
            onBackdropPress={handleClose}
            onBackButtonPress={handleClose}
        >
            <View style={styles.content}>
                {children}

            </View>
        </Modal>
    );
}