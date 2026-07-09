import {
    BedDouble,
    Building2,
    IndianRupee,
    UserPlus,
    Users,
    Wrench,
} from "lucide-react-native";
import React from "react";
import { View } from "react-native";

import { TopSafeScreen } from "@/components/TopSafeScreen";
import { ScreenHeader } from "@/components/ScreenHeader";
import { usePgContext } from "@/context/usePgContext";
import { StatCard } from "@/features/dashboard/components/StatCard";
import { styles } from "@/features/dashboard/styles/dashboard.styles";
import { colors } from "@/styles/colors";

const Dashboard = () => {
    const { branches, rooms, guests } = usePgContext();

    // const { data: branches } = useQueries({})
    const branchesLength = branches?.length;
    const roomsLength = rooms?.length;
    const guestsLength = guests?.length;

    const currentDate = new Date();
    const guestsThisMonth = guests.filter((_guest) => {
        const joiningDate = new Date();
        return (
            joiningDate.getFullYear() === currentDate.getFullYear() &&
            joiningDate.getMonth() === currentDate.getMonth()
        );
    }).length;

    const monthlyRent = guests.reduce((total, guest) => {
        const room = rooms.find((r) => r.id === guest.roomId);
        return total + Number(room?.rent ?? 0);
    }, 0);
    const avgMonthlyRent = guests.length > 0 ? monthlyRent / guests.length : 0;

    const roomsUnderMaintainance = rooms.filter(
        (room) => room.maintainance
    ).length;

    return (
        <TopSafeScreen>
            <ScreenHeader title="Dashboard" canGoBack={false} />
            <View style={styles.grid}>
                <StatCard
                    title="Branches"
                    value={branchesLength}
                    icon={<Building2 size={24} color={colors.primary} />}
                />
                <StatCard
                    title="Rooms"
                    value={roomsLength}
                    icon={<BedDouble size={24} color={colors.primary} />}
                />
                <StatCard
                    title="Guests"
                    value={guestsLength}
                    icon={<Users size={24} color={colors.primary} />}
                />
                <StatCard
                    title={`Guests in this month`}
                    value={guestsThisMonth}
                    icon={<UserPlus size={24} color={colors.primary} />}
                />
                <StatCard
                    title="Avg Monthly Rent Collected"
                    value={`₹${avgMonthlyRent}`}
                    icon={<IndianRupee size={24} color={colors.primary} />}
                    fullWidth
                />
                <StatCard
                    title="Rooms in Maintainance"
                    value={roomsUnderMaintainance}
                    icon={<Wrench size={24} color={colors.error} />}
                    fullWidth
                />
            </View>
        </TopSafeScreen>
    );
};


export default Dashboard;