import z from 'zod';
import { branchSchema } from '@/features/branches/schema/branchSchema';

export type branchType = z.infer<typeof branchSchema> & {
  id: string;
};

export type branchFormType = z.infer<typeof branchSchema>;

export type branchRequestType = Omit<branchType, 'id'>;
