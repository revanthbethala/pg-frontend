import {
    BedDouble,
    Building2,
    IndianRupee,
    UserPlus,
    Users,
    Wrench
} from "lucide-react-native";
import React from "react";
import { View } from "react-native";

import Loader from "@/components/Loader";
import { ScreenHeader } from "@/components/ScreenHeader";
import { TopSafeScreen } from "@/components/TopSafeScreen";
import { StatCard } from "@/features/dashboard/components/StatCard";
import { styles } from "@/features/dashboard/styles/dashboard.styles";
import { colors } from "@/styles/colors";
import { commonStyles } from "@/styles/commonStyle";
import { useDashboard } from "../hooks/queries/useDashboard";
import ErrorScreen from "@/components/ErrorScreen";
import { getApiError } from "@/utils/getApiError";



const Dashboard = () => {
    const { data: dashboard, isLoading, isError, error } = useDashboard();

    if (isLoading)
        return <Loader />
    if (isError)
        return <ErrorScreen message={getApiError(error)} />
    if (!dashboard) {
        return <ErrorScreen message="Unable to load dashboard" />
    }
    const {
        averageMonthlyRent,
        branches: branchesLength,
        guests: guestsLength,
        guestsThisMonth,
        rooms: roomsLength,
        roomsUnderMaintenance,
    } = dashboard;



    return (
        <TopSafeScreen>
            <View style={commonStyles.headerSection}>
                <ScreenHeader title="Dashboard" canGoBack={false} />
            </View>

            <View style={[styles.grid, commonStyles.bodySection]}>
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
                    value={`₹${averageMonthlyRent.toFixed(2)}`}
                    icon={<IndianRupee size={24} color={colors.primary} />}
                    fullWidth
                />
                <StatCard
                    title="Rooms in Maintainance"
                    value={roomsUnderMaintenance}
                    icon={<Wrench size={24} color={colors.destructive} />}
                    fullWidth

                />
                {/* <StatCard
                    title="Inactive Branches"
                    value={inActiveBranches}
                    icon={<Building2Icon size={24} color={colors.destructive} />}

                /> */}
            </View>
        </TopSafeScreen>
    );
};


export default Dashboard;