import { type FilterValues } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValues
  handleFilterChange: (filter: FilterValues) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <footer>
      <span>
        <strong>{activeCount}</strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
            Clear completed
          </button>
        )
      }
    </footer>
  )
}
