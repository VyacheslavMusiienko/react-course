import startsWithCapital from './startsWithCapital';

export const validateText = (
    refValue: string,
    stateProp: React.Dispatch<React.SetStateAction<string>>
) => {
    let error = '';
    const regex = /^[ \d]+/;

    if (refValue.length < 2 || refValue.length > 10)
        error = 'Must contain 2-10 characters';

    if (refValue && startsWithCapital(refValue)) {
        error = 'First letter must be capitalized';
    }
    if (regex.test(refValue)) {
        error = 'Invalid input';
    }

    if (!refValue) error = 'Required field';

    stateProp(error);

    return !!error;
};
