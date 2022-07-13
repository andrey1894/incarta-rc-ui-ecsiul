export const MONTH_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const ROLE_LIST: { title: string; value: number }[] = [
  { title: 'Director', value: 20 },
  { title: 'CEO', value: 25 },
  { title: 'Manager', value: 15 },
  { title: 'Lead Developer', value: 10 },
  { title: 'Senior Developer', value: 5 },
  { title: 'Developer', value: 0 },
];

export const DEFAULT_ROLE = 'Developer';

export const ROLE_EXPERIENCE: { min: number; max: number }[] = [
  { min: 0, max: 3 },
  { min: 3, max: 5 },
  { min: 5, max: 10 },
  { min: 10, max: 15 },
  { min: 15, max: 20 },
  { min: 20, max: 25 },
  { min: 25, max: 30 },
];
