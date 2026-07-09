import { DataNotFound } from '@/components/DataNotFound';
import ErrorScreen from '@/components/ErrorScreen';
import { FloatingButton } from '@/components/FloatingButton';
import Loader from '@/components/Loader';
import { ModalWrapper } from '@/components/ModalWrapper';
import { TopSafeScreen } from '@/components/TopSafeScreen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { AddRoom } from '@/features/rooms/components/AddRoom';
import { EditRoom } from '@/features/rooms/components/EditRoom';
import { RoomCard } from '@/features/rooms/components/RoomCard';
import { useRooms } from '@/features/rooms/hooks/queries/useRooms';
import { roomType } from '@/features/rooms/types/room';
import { useDebounce } from '@/hooks/useDebounce';
import { commonStyles } from '@/styles/commonStyle';
import { PgStackParamList } from '@/types/navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { DoorClosed } from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

export const Rooms = () => {
    const [showModal, setShowModal] = useState(false);
    const route = useRoute<RouteProp<PgStackParamList, 'Rooms'>>();
    const { branchId, branchName } = route.params;
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<roomType | null>(null);

    const { data: rooms, isError, isLoading, error, isRefetching, refetch } = useRooms(branchId)

    const handleShowModal = () => {
        setShowModal(!showModal);
    }
    const filteredRooms = rooms?.filter((room) => room.branchId === branchId)
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query)
    const searchedRooms = useMemo(() => {
        if (!debouncedQuery?.trim()) return filteredRooms;
        return filteredRooms?.filter(room => room.roomNumber === debouncedQuery);
    }, [debouncedQuery, filteredRooms]);

    if (isError) {
        <ErrorScreen message={error.message} />
    }

    if (isLoading) {
        return <Loader />
    }

    const handleEditRoom = (room: roomType) => {
        setSelectedRoom(room);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedRoom(null);
    };
    return (
        <TopSafeScreen>
            <View style={commonStyles.headerSection}>
                <ScreenHeader title={branchName} />
                <SearchBar query={query} setQuery={setQuery} placeholder={'Search by room no.'} />
            </View>
            <View style={commonStyles.bodySection}>
                <FlatList
                    keyExtractor={room => room.id}
                    renderItem={({ item }: { item: roomType }) => <RoomCard room={item} onEdit={handleEditRoom} />}
                    data={searchedRooms}
                    ListEmptyComponent={<DataNotFound message='No rooms found' />}
                    refreshing={isRefetching}
                    onRefresh={refetch}
                    showsVerticalScrollIndicator={false}

                />
                <FloatingButton onOpen={handleShowModal} >
                    <DoorClosed />
                </FloatingButton>
                <ModalWrapper visible={showModal} onClose={handleShowModal}>
                    <AddRoom onClose={handleShowModal} branchId={branchId} />
                </ModalWrapper>
                <ModalWrapper visible={showEditModal} onClose={handleShowModal}>
                    {selectedRoom && <EditRoom onClose={handleCloseEditModal} room={selectedRoom} />}
                </ModalWrapper>
            </View>
        </TopSafeScreen >
    )
}
