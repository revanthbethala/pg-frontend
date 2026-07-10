import { DataNotFound } from '@/components/DataNotFound';
import ErrorScreen from '@/components/ErrorScreen';
import { FloatingButton } from '@/components/FloatingButton';
import Loader from '@/components/Loader';
import { ModalWrapper } from '@/components/ModalWrapper';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { TopSafeScreen } from '@/components/TopSafeScreen';
import { AddBranch } from '@/features/branches/components/AddBranch';
import { BranchCard } from '@/features/branches/components/BranchCard';
import { EditBranch } from '@/features/branches/components/EditBranch';
import { useBranches } from '@/features/branches/hooks/queries/useBranches';
import { branchType } from '@/features/branches/types/branch';
import { useDebounce } from '@/hooks/useDebounce';
import { commonStyles } from '@/styles/commonStyle';
import { LucideBuilding } from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

export const Branches = () => {
    const [query, setQuery] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState<branchType | null>(null);
    const { isLoading, data: branches, isRefetching, refetch, error, isError } = useBranches();
    const debouncedQuery = useDebounce(query);

    const filteredBranches = useMemo(() => {
        if (!debouncedQuery.trim()) return branches;
        return branches?.filter(branch => branch.branchName.toLowerCase().includes(debouncedQuery.toLowerCase())) || [];
    }, [debouncedQuery, branches]);

    const handleShowModal = () => { setShowAddModal(!showAddModal); }

    const handleEditBranch = (branch: branchType) => {
        setSelectedBranch(branch);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedBranch(null);
    };

    if (isLoading) return <Loader />
    if (isError) <ErrorScreen message={error.message} />

    return (
        <TopSafeScreen>
            <View style={commonStyles.headerSection}>
                <ScreenHeader title='Your Branches' canGoBack={false} />
                <SearchBar query={query} setQuery={setQuery} placeholder='Search by branch name' />
            </View>
            <View style={commonStyles.bodySection}>
                <FlatList
                    data={filteredBranches}
                    renderItem={({ item }) => <BranchCard branch={item} onEdit={handleEditBranch} />}
                    keyExtractor={(branch) => branch.id}
                    ListEmptyComponent={<DataNotFound message="No branches found" />}
                    refreshing={isRefetching}
                    showsVerticalScrollIndicator={false}
                    onRefresh={refetch}
                />

                <FloatingButton onOpen={handleShowModal}>
                    <LucideBuilding />
                </FloatingButton>

                <ModalWrapper visible={showAddModal} onClose={handleShowModal}>
                    <AddBranch onClose={handleShowModal} />
                </ModalWrapper>
                <ModalWrapper visible={showEditModal} onClose={handleCloseEditModal}>
                    {selectedBranch && <EditBranch branch={selectedBranch} onClose={handleCloseEditModal} />}
                </ModalWrapper>
            </View>

        </TopSafeScreen >
    )
}
