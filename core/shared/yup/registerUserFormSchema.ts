import { object, ref, string } from 'yup';
import {
  USER_PROFILE_FIRST_NAME_MINLEN, USER_PROFILE_FIRST_NAME_MAXLEN,
  USER_PROFILE_LAST_NAME_MAXLEN, USER_PROFILE_LAST_NAME_MINLEN,
  USER_PROFILE_PASSWORD_MINLEN
} from "../../../utils/constants";
import { IRegisterUserFormData } from "../../client/models/IRegisterUserFormData";

const registerUserFormSchema = object<IRegisterUserFormData>().shape({
  firstName: string()
    .min(USER_PROFILE_FIRST_NAME_MINLEN, `First Name must be between ${USER_PROFILE_FIRST_NAME_MINLEN} and ${USER_PROFILE_FIRST_NAME_MAXLEN} characters.`)
    .max(USER_PROFILE_FIRST_NAME_MAXLEN, `First Name must be between ${USER_PROFILE_FIRST_NAME_MINLEN} and ${USER_PROFILE_FIRST_NAME_MAXLEN} characters.`)
    .required('First Name is required'),
  lastName: string()
    .min(USER_PROFILE_LAST_NAME_MINLEN, `Last Name must be between ${USER_PROFILE_LAST_NAME_MINLEN} and ${USER_PROFILE_LAST_NAME_MAXLEN} characters.`)
    .max(USER_PROFILE_LAST_NAME_MAXLEN, `Last Name must be between ${USER_PROFILE_LAST_NAME_MINLEN} and ${USER_PROFILE_LAST_NAME_MAXLEN} characters.`)
    .required('Last Name is required'),
  email: string()
    .email('Invalid Email address')
    .required('Email is required'),
  password: string()
    .min(USER_PROFILE_PASSWORD_MINLEN, `Password must be between at least ${USER_PROFILE_PASSWORD_MINLEN} characters.`)
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export default registerUserFormSchema;
