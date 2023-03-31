export const getGender = (
    genderRefArray: React.RefObject<HTMLInputElement>[]
): string | null => {
    let gender = null;

    genderRefArray.forEach((genderEl) => {
        if (genderEl.current?.checked) {
            gender = genderEl.current.value;
        }
    });

    return gender;
};
