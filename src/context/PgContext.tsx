import { branchType } from "@/features/branches/types/branch";
import { guestType } from "@/features/guests/types/guest";
import { roomType } from "@/features/rooms/types/room";
import { loadGuests, loadRooms, saveBranches, saveGuests, saveRooms } from "@/storage/pgStorage";
import { createContext, useState } from "react";


type PgContextType = {
    branches: branchType[];
    addBranch: (branch: branchType) => Promise<void>;
    rooms: roomType[];
    addRoom: (room: roomType) => Promise<void>;
    guests: guestType[];
    addGuest: (guest: guestType) => Promise<void>;
    loadGuestsData: () => void;
    loadRoomsData: () => void;
    isLoading: boolean
};

export const PgContext = createContext<PgContextType | null>(null)


export function PgProvider({ children }: { children: React.ReactNode }) {
    const [branches, setBranches] = useState<branchType[]>([]);
    const [rooms, setRooms] = useState<roomType[]>([]);
    const [guests, setGuests] = useState<guestType[]>([]);
    const [isLoading,] = useState(true);
    async function addBranch(branch: branchType) {
        const updatedBranches = [...branches, branch];
        setBranches(updatedBranches);
        await saveBranches(updatedBranches);
    }
    async function addRoom(room: roomType) {
        const updatedRooms = [...rooms, room];
        setRooms(updatedRooms);
        await saveRooms(updatedRooms);
    }
    async function addGuest(guest: guestType) {
        const updatedGuests = [...guests, guest];
        setGuests(updatedGuests);
        await saveGuests(updatedGuests);
    }


    async function loadRoomsData() {
        const roomsData = await loadRooms();
        setRooms(roomsData);
    }

    async function loadGuestsData() {
        const guestsData = await loadGuests();
        setGuests(guestsData);
    }


    // useEffect(() => {
    //     const loadData = async () => {
    //         setBranches(await loadBranches());
    //         setRooms(await loadRooms());
    //         setGuests(await loadGuests());
    //         setIsLoading(false)
    //     };
    //     loadData();
    // }, [])

    return (
        <PgContext.Provider value={{ branches, addBranch, isLoading, loadGuestsData, loadRoomsData, rooms, addRoom, guests, addGuest }}>
            {children}
        </PgContext.Provider>
    )
}
