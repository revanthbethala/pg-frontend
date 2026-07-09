import { Search } from 'lucide-react-native';
import React, { SetStateAction } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '@/styles/colors';

type SearchBarProps = {
    query: string,
    setQuery: React.Dispatch<SetStateAction<string>>,
    placeholder?: string
}

export const SearchBar = ({ query, setQuery, placeholder = 'Search' }: SearchBarProps) => {
    return (
        <View style={searchStyles.searchBar}>
            <Search size={20} color={colors.text} />
            <TextInput placeholder={placeholder}
                value={query}
                style={searchStyles.input}
                autoCapitalize='none'
                onChangeText={setQuery}
            />
        </View>
    )
}

const searchStyles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.border,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: colors.text
    },
});