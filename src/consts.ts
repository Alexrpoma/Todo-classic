export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // ? With as const we can get the type of the object, and we cannot change the value of the object.

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const
