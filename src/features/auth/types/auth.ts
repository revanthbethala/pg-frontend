import z from 'zod';
import { registrationSchema } from '@/features/auth/schema/authSchema';

export type registerType = z.infer<typeof registrationSchema>;
export type userType = Omit<registerType, 'confirmPassword'>;
export type loginType = userType;

export type AuthResponse = {
  refreshToken: string;
  accessToken: string;
  user?: { email: string };
};
