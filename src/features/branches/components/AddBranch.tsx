import { useState } from "react";

import { getApiError } from "@/utils/getApiError";

import { useCreateBranch } from "@/features/branches/hooks/mutations/useCreateBranch";
import { branchFormType } from "@/features/branches/types/branch";
import { BranchForm } from "./BranchForm";

type Props = {
    onClose: () => void;
};

export function AddBranch({ onClose }: Props) {
    const { mutateAsync, isPending } = useCreateBranch();

    const [formError, setFormError] = useState("");

    const handleSubmit = async (data: branchFormType) => {
        try {
            setFormError("");
            await mutateAsync(data);
            onClose();
        } catch (error) {
            setFormError(getApiError(error));
        }
    };

    return (
        <BranchForm
            defaultValues={{
                branchName: "",
                city: "",
                address: "",
                isActive: true,
            }}
            title="Add New Branch"
            submitButtonTitle="Create Branch"
            isPending={isPending}
            formError={formError}
            onSubmit={handleSubmit}
            onClose={onClose}
        />
    );
}