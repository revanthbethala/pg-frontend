export const formatDate = (dateValue: Date | string | null | undefined) => {
  if (!dateValue) return 'N/A';

  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);

  if (isNaN(date.getTime())) return 'N/A';

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
