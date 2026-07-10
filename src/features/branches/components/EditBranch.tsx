import { useState } from "react";

import { getApiError } from "@/utils/getApiError";

import { useUpdateBranch } from "@/features/branches/hooks/mutations/useUpdateBranch";
import { branchFormType, branchType } from "@/features/branches/types/branch";
import { BranchForm } from "./BranchForm";

type Props = {
    branch: branchType;
    onClose: () => void;
};

export function EditBranch({
    branch,
    onClose,
}: Props) {
    const { mutateAsync, isPending } = useUpdateBranch();

    const [formError, setFormError] = useState("");

    const handleSubmit = async (data: branchFormType) => {
        try {
            setFormError("");

            await mutateAsync({
                branchId: branch.id,
                data,
            });

            onClose();
        } catch (error) {
            setFormError(getApiError(error));
        }
    };

    return (
        <BranchForm
            title="Edit Branch"
            submitButtonTitle="Update Branch"
            defaultValues={{

                branchName: branch.branchName,
                address: branch.address,
                isActive: branch.isActive,
            }}
            isPending={isPending}
            formError={formError}
            onSubmit={handleSubmit}
            onClose={onClose}
        />
    );
}