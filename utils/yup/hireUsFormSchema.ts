import { object, string } from 'yup';
import {
  HIRE_US_BUDGET_OPTIONS,
  HIRE_US_FIRST_NAME_MINLEN, HIRE_US_FIRST_NAME_MAXLEN,
  HIRE_US_LAST_NAME_MAXLEN, HIRE_US_LAST_NAME_MINLEN,
  HIRE_US_COMPANY_NAME_MINLEN, HIRE_US_COMPANY_NAME_MAXLEN,
  HIRE_US_PROJECT_INFO_MINLEN, HIRE_US_PROJECT_INFO_MAXLEN
} from "../constants";

const budgetValues = HIRE_US_BUDGET_OPTIONS.map(x => x.value);

const hireUsFormSchema = object({
  firstName: string()
    .min(HIRE_US_FIRST_NAME_MINLEN, `First Name must be between ${HIRE_US_FIRST_NAME_MINLEN} and ${HIRE_US_FIRST_NAME_MAXLEN} characters.`)
    .max(HIRE_US_FIRST_NAME_MAXLEN, `First Name must be between ${HIRE_US_FIRST_NAME_MINLEN} and ${HIRE_US_FIRST_NAME_MAXLEN} characters.`)
    .required(),
  lastName: string()
    .min(HIRE_US_LAST_NAME_MINLEN, `Last Name must be between ${HIRE_US_LAST_NAME_MINLEN} and ${HIRE_US_LAST_NAME_MAXLEN} characters.`)
    .max(HIRE_US_LAST_NAME_MAXLEN, `Last Name must be between ${HIRE_US_LAST_NAME_MINLEN} and ${HIRE_US_LAST_NAME_MAXLEN} characters.`)
    .required(),
  email: string().email().required(),
  companyName: string()
    .min(HIRE_US_COMPANY_NAME_MINLEN, `Company Name must be between ${HIRE_US_COMPANY_NAME_MINLEN} and ${HIRE_US_COMPANY_NAME_MAXLEN} characters.`)
    .max(HIRE_US_COMPANY_NAME_MAXLEN, `Company Name must be between ${HIRE_US_COMPANY_NAME_MINLEN} and ${HIRE_US_COMPANY_NAME_MAXLEN} characters.`)
    .required(),
  budget: string().oneOf(budgetValues, `Budget must be one of ${budgetValues.join(", ")}`).required(),
  projectInfo: string()
    .min(HIRE_US_PROJECT_INFO_MINLEN, `Project Info must be between ${HIRE_US_PROJECT_INFO_MINLEN} and ${HIRE_US_PROJECT_INFO_MAXLEN} characters.`)
    .max(HIRE_US_PROJECT_INFO_MAXLEN, `Project Info must be between ${HIRE_US_PROJECT_INFO_MINLEN} and ${HIRE_US_PROJECT_INFO_MAXLEN} characters.`)
    .required(),
});

export default hireUsFormSchema;
