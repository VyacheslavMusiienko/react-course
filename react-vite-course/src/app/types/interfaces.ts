export interface IUser {
    name: string | undefined;
    surname: string | undefined;
    birthday: string | undefined;
    picture: string | undefined;
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
export interface IProducts {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
