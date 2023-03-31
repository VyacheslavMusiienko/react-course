export const validateFile = (
    refValue: Blob | undefined,
    stateProp: React.Dispatch<React.SetStateAction<string>>
) => {
    let error = '';

    if (!refValue?.type.includes('image')) error = 'Must be an image';

    if (!refValue) error = 'Required field';

    stateProp(error);

    return !!error;
};
