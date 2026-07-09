import { DataNotFound } from '@/components/DataNotFound';
import ErrorScreen from '@/components/ErrorScreen';
import { FloatingButton } from '@/components/FloatingButton';
import Loader from '@/components/Loader';
import { ModalWrapper } from '@/components/ModalWrapper';
import { TopSafeScreen } from '@/components/TopSafeScreen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { AddGuest } from '@/features/guests/components/AddGuest';
import { GuestCard } from '@/features/guests/components/GuestCard';
import { useGuests } from '@/features/guests/hooks/queries/useGuests';
import { guestType } from '@/features/guests/types/guest';
import { useDebounce } from '@/hooks/useDebounce';
import { PgStackParamList } from '@/types/navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { User2Icon } from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { EditGuest } from '../components/EditGuest';
import { commonStyles } from '@/styles/commonStyle';
export const Guests = () => {
    const route = useRoute<RouteProp<PgStackParamList, 'Guests'>>();
    const { roomId, roomNumber } = route.params
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
    }
    const { data: guests, isLoading, isError, error, refetch, isRefetching } = useGuests(roomId);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState<guestType | null>(null);

    const handleShowEditModal = (guest: guestType) => {
        setShowEditModal(true);
        setSelectedGuest(guest)
    }
    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedGuest(null);
    }

    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query)
    const searchedGuests = useMemo(() => {
        if (!debouncedQuery.trim()) return guests;
        return guests?.filter(guest => {
            const searchQuery = debouncedQuery.toLowerCase().trim();
            const nameMatches = guest?.name?.toLowerCase().includes(searchQuery);
            const phoneMatches = guest?.phone?.includes(searchQuery);
            return nameMatches || phoneMatches;
        });
    }, [debouncedQuery, guests]);
    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        <ErrorScreen message={error.message} />
    }
    return (
        <TopSafeScreen>
            <View style={commonStyles.headerSection}>

                <ScreenHeader title={"Room-" + roomNumber} shouldCapitalize={false} />
                <SearchBar query={query} setQuery={setQuery} placeholder='Search by name or phone no.' />
            </View>
            <View style={commonStyles.bodySection}>
                <FlatList
                    keyExtractor={guest => guest.id}
                    renderItem={({ item }: { item: guestType }) => <GuestCard guest={item} onEdit={() => handleShowEditModal(item)} />}
                    data={searchedGuests}
                    showsVerticalScrollIndicator={false}
                    onRefresh={refetch}
                    refreshing={isRefetching}
                    ListEmptyComponent={<DataNotFound message='No guests found.Click + to add guests' />} />
                <FloatingButton onOpen={handleShowModal}>
                    <User2Icon />
                </FloatingButton>

                <ModalWrapper visible={showModal} onClose={handleShowModal}>
                    <AddGuest onClose={handleShowModal} roomId={roomId} />
                </ModalWrapper>

                <ModalWrapper visible={showEditModal} onClose={handleCloseEditModal}>
                    {selectedGuest && <EditGuest onClose={handleCloseEditModal} guest={selectedGuest} />}
                </ModalWrapper>
            </View>

        </TopSafeScreen>
    )
}
