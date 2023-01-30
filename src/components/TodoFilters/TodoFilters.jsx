import React from 'react'
import { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton } from './TodoFilters.components'

const TodoFilters = ({
    total,
    activeFilter,
    handleClearComplete,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
}) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={ () => showAllTodos()} active={activeFilter} filter='All' />
                <FilterButton action={ () => showActiveTodos()} active={activeFilter} filter='Active' />
                <FilterButton action={ () => showCompletedTodos()} active={activeFilter} filter='Completed' />
            </FilterButtonContainer>
            <button onClick={() => handleClearComplete()} className='text-DarkTheme-DarkGrayishBlue2 hover:text-white cursor-pointer transition-all duration-300 ease-in-out'>
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

export { TodoFilters }