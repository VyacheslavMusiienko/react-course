export const validateRequired = (
    refValue: string | boolean | null,
    stateProp: React.Dispatch<React.SetStateAction<string>>
) => {
    let error = '';

    if (!refValue) error = 'Required field';

    stateProp(error);

    return !!error;
};
