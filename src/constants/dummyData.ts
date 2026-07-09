import { branchType } from '../features/branches/types/branch';
import { guestType } from '../features/guests/types/guest';
import { roomType } from '../features/rooms/types/room';

export const dummyBranches: branchType[] = [
  {
    id: 'b1',
    name: 'SR Nagar PG',
    city: 'Hyderabad',
    address: 'Ameerpet Road, SR Nagar',
    status: true,
  },
  {
    id: 'b2',
    name: 'Madhapur PG',
    city: 'Hyderabad',
    address: 'Hi-Tech City Road',
    status: true,
  },
  {
    id: 'b3',
    name: 'SR Nagar PG',
    city: 'Hyderabad',
    address: 'Ameerpet Road, SR Nagar',
    status: true,
  },
];

export const dummyRooms: roomType[] = [
  {
    id: 'r1',
    branchId: 'b1',
    roomNumber: '101',
    capacity: '3',
    rent: '7000',
    maintainance: false,
  },
  {
    id: 'r2',
    branchId: 'b1',
    roomNumber: '102',
    capacity: '2',
    rent: '6500',
    maintainance: false,
  },
  {
    id: 'r3',
    branchId: 'b2',
    roomNumber: '201',
    capacity: '4',
    rent: '8500',
    maintainance: false,
  },
];
export const dummyGuests: guestType[] = [
  {
    id: 'g1',
    roomId: 'r1',
    name: 'Rahul',
    phone: '9876543210',
    aadhaar: '123456789012',
    address: 'Vijayawada',
    joiningDate: new Date('2026-06-01'),
    profilePic: { uri: '' },
  },
  {
    id: 'g2',
    roomId: 'r1',
    name: 'Kiran',
    phone: '9123456780',
    aadhaar: '234567890123',
    address: 'Guntur',
    joiningDate: new Date('2026-06-10'),
    profilePic: { uri: '' },
  },
  {
    id: 'g3',
    roomId: 'r3',
    name: 'Sneha',
    phone: '9988776655',
    aadhaar: '345678901234',
    address: 'Hyderabad',
    joiningDate: new Date('2026-06-15'),
    profilePic: { uri: '' },
  },
];
