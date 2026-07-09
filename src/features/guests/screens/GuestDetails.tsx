import { DataNotFound } from '@/components/DataNotFound';
import Loader from '@/components/Loader';
import { SafeScreen } from '@/components/SafeScreen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { useGuest } from '@/features/guests/hooks/queries/useGuest';
import { guestStyles } from '@/features/guests/styles/guestDetails.style';
import { avatarStyle } from '@/styles/avatarStyle';
import { colors } from '@/styles/colors';
import { PgStackParamList } from '@/types/navigation';
import { capitalize } from '@/utils/capitalize';
import { formatDate } from '@/utils/formatDate';
import { RouteProp, useRoute } from '@react-navigation/native';
import { User2Icon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

export const GuestDetails = () => {
    const route = useRoute<RouteProp<PgStackParamList, 'GuestDetails'>>();
    const { guestId, guestName } = route.params;


    const { data: guest, isLoading } = useGuest(guestId);
    const [hasErr, setHasErr] = useState(Boolean(!guest?.profilePic?.uri));



    if (isLoading) {
        return <Loader />
    }
    if (!guest) {
        return (
            <DataNotFound message='Guest not found' />
        );
    }
    return (
        <SafeScreen>
            <ScreenHeader title={guestName + "'s Info"} />
            <View style={avatarStyle.imageContainer}>
                {hasErr ?
                    <User2Icon color={colors.text} size={80} style={[avatarStyle.avatar]} />
                    :
                    <Image source={guest?.profilePic}
                        onError={() => setHasErr(true)}
                        style={[avatarStyle.img, avatarStyle.avatar]}
                        resizeMode="cover"
                    />
                }
            </View>

            <View style={guestStyles.infoContainer}>
                <DetailRow label="Name" value={capitalize(guest.name)} />
                <DetailRow label="Phone" value={guest.phone} />
                <DetailRow label="Aadhaar Number" value={guest.aadhaar} />
                <DetailRow label="Joining Date" value={formatDate(guest.joiningDate)} />
                <DetailRow label="Address" value={guest.address} isMultiline />
            </View>
        </SafeScreen>
    )
}


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

