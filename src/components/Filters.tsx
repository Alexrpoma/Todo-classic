import { FILTERS_BUTTONS } from '../consts'
import { type FilterValues } from '../types'

interface Props {
  filterSelected: FilterValues
  onFilterChange: (filter: FilterValues) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
              className={className}
              href={href}
              onClick={(event) => { event.preventDefault(); onFilterChange(key as FilterValues) }}
            >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
