import { object, string } from 'yup';
import {
  USER_PROFILE_FIRST_NAME_MINLEN, USER_PROFILE_FIRST_NAME_MAXLEN,
  USER_PROFILE_LAST_NAME_MAXLEN, USER_PROFILE_LAST_NAME_MINLEN
} from "../../../utils/constants";
import IUserProfileEntity from "../entities/IUserProfileEntity";

const userProfileModelSchema = object<IUserProfileEntity>({
  firstName: string()
    .min(USER_PROFILE_FIRST_NAME_MINLEN, `First Name must be between ${USER_PROFILE_FIRST_NAME_MINLEN} and ${USER_PROFILE_FIRST_NAME_MAXLEN} characters.`)
    .max(USER_PROFILE_FIRST_NAME_MAXLEN, `First Name must be between ${USER_PROFILE_FIRST_NAME_MINLEN} and ${USER_PROFILE_FIRST_NAME_MAXLEN} characters.`)
    .required(),
  lastName: string()
    .min(USER_PROFILE_LAST_NAME_MINLEN, `Last Name must be between ${USER_PROFILE_LAST_NAME_MINLEN} and ${USER_PROFILE_LAST_NAME_MAXLEN} characters.`)
    .max(USER_PROFILE_LAST_NAME_MAXLEN, `Last Name must be between ${USER_PROFILE_LAST_NAME_MINLEN} and ${USER_PROFILE_LAST_NAME_MAXLEN} characters.`)
    .required(),
});

export default userProfileModelSchema;
