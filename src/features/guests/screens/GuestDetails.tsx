import ErrorScreen from '@/components/ErrorScreen';
import Loader from '@/components/Loader';
import { ScreenHeader } from '@/components/ScreenHeader';
import { TopSafeScreen } from '@/components/TopSafeScreen';
import { useGuest } from '@/features/guests/hooks/queries/useGuest';
import { guestStyles } from '@/features/guests/styles/guestDetails.style';
import { avatarStyle } from '@/styles/avatarStyle';
import { colors } from '@/styles/colors';
import { commonStyles } from '@/styles/commonStyle';
import { PgStackParamList } from '@/types/navigation';
import { capitalize } from '@/utils/capitalize';
import { formatDate } from '@/utils/formatDate';
import { getApiError } from '@/utils/getApiError';
import { RouteProp, useRoute } from '@react-navigation/native';
import { User2Icon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

export const GuestDetails = () => {
    const route = useRoute<RouteProp<PgStackParamList, 'GuestDetails'>>();
    const { guestId, guestName } = route.params;

    const { data: guest, isLoading, isError, error } = useGuest(guestId);
    const [imageLoadError, setImageLoadError] = useState(false);

    if (isLoading) {
        return <Loader />
    }
    if (isError || !guest) {
        return <ErrorScreen message={getApiError(error) || 'Guest not found'} />;
    }
    const shouldShowIconFallback = !guest.profilePic || imageLoadError;

    return (
        <TopSafeScreen>
            <View style={commonStyles.headerSection}>
                <ScreenHeader title={guestName + "'s Info"} />
            </View>
            <View style={commonStyles.bodySection}>
                <View style={avatarStyle.imageContainer}>
                    {shouldShowIconFallback ? (
                        <User2Icon color={colors.text} size={80} style={[avatarStyle.avatar]} />
                    ) : (
                        <Image
                            source={{ uri: guest.profilePic }}
                            onError={() => setImageLoadError(true)}
                            style={[avatarStyle.img, avatarStyle.avatar]}
                            resizeMode="cover"
                        />
                    )}
                </View>

                <View style={guestStyles.infoContainer}>
                    <DetailRow label="Name" value={capitalize(guest.name)} />
                    <DetailRow label="Phone" value={guest.phone} />
                    <DetailRow label="Aadhaar Number" value={guest.aadhaar} />
                    <DetailRow label="Joining Date" value={formatDate(guest.joiningDate)} />
                    <DetailRow label="Address" value={guest.address} isMultiline />
                </View>
            </View>
        </TopSafeScreen>
    );
};

interface DetailRowProps {
    label: string;
    value?: string | number;
    isMultiline?: boolean;
}

const DetailRow = ({ label, value, isMultiline }: DetailRowProps) => (
    <View style={isMultiline ? guestStyles.multilineRow : guestStyles.row}>
        <Text style={guestStyles.label}>{label}</Text>
        <Text style={isMultiline ? guestStyles.multilineValue : guestStyles.value}>
            {value || 'N/A'}
        </Text>
    </View>
);

