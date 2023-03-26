export interface IUser {
    name: string | undefined;
    surname: string | undefined;
    birthday: string | undefined;
    file: Blob | undefined;
    country: string | undefined;
    gender: string | null;
}
export interface FormState {
    nameError: null | string;
    surnameError: null | string;
    birthdayError: null | string;
    genderError: null | string;
    countryError: null | string;
    fileError: null | string;
    agreementError: null | string;
    isSaved: boolean;
}
