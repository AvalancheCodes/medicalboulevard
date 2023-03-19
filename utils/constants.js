export const RecurringType = {
  None: "none",
  EveryDay: "every-day",
  EveryWeek: "every-week",
  EveryMonth: "every-month"
}

const FIRST_NAME_MINLEN = 1;
const FIRST_NAME_MAXLEN = 32;

const LAST_NAME_MINLEN = 1;
const LAST_NAME_MAXLEN = 32;

//#region UserProfile data
export const USER_PROFILE_FIRST_NAME_MINLEN = FIRST_NAME_MINLEN;
export const USER_PROFILE_FIRST_NAME_MAXLEN = FIRST_NAME_MAXLEN;

export const USER_PROFILE_LAST_NAME_MINLEN = LAST_NAME_MINLEN;
export const USER_PROFILE_LAST_NAME_MAXLEN = LAST_NAME_MAXLEN;

export const USER_PROFILE_PASSWORD_MINLEN = 8;

//#endregion UserProfileData

//#region Hire Us form data
export const HIRE_US_FIRST_NAME_MINLEN = FIRST_NAME_MINLEN;
export const HIRE_US_FIRST_NAME_MAXLEN = FIRST_NAME_MAXLEN;

export const HIRE_US_LAST_NAME_MINLEN = LAST_NAME_MINLEN;
export const HIRE_US_LAST_NAME_MAXLEN = LAST_NAME_MAXLEN;

export const HIRE_US_COMPANY_NAME_MINLEN = 1;
export const HIRE_US_COMPANY_NAME_MAXLEN = 64;

export const HIRE_US_BUDGET_OPTIONS = [
  {value: "1000_5000", label: "$1,000 - $5,000"},
  {value: "5000_10000", label: "$5,000 - $10,000"},
  {value: "10000_50000", label: "$10,000 - $50,000"},
  {value: "50000_inf", label: "$50,000+"}
]

export const HIRE_US_PROJECT_INFO_MINLEN = 8;
export const HIRE_US_PROJECT_INFO_MAXLEN = 256;

//#endregion Hire Us form data
