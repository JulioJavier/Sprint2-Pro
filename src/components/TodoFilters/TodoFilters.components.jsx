
const FiltersContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-2 bg-LightTheme-LightGray dark:bg-DarkTheme-DarkDesaturatedBlue border-b border-solid border-gray-600">
            { children }
        </div>
    )
}

const ItemsLeft = ( { total = 0 }) => {
    return (
        <p className="text-LightTheme-DarkGrayishBlue3 dark:text-DarkTheme-DarkGrayishBlue2 text-sm">
            {total} items left
        </p>
    )
}

const FilterButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            { children }
        </div>
    )
}

const FilterButton = ( { action, active, filter }) => {
    return (
        <button onClick={action} className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-primary-BrightBlue' : 'text-DarkTheme-DarkGrayishBlue2')}>
            {filter}
        </button>
    )
}

export { FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton }