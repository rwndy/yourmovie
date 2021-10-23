const SearchMovies = ({search, onSearch}) => {
  return (
    <div className="form-search">
        <div className="form-search__wrapper">
          <input
            type="text"
            placeholder="Cari"
            autoComplete="off"
            className="form-search__input"
            value={search}
            onChange={onSearch}
          />
          <div className="form-search__icon-wrapper">
            <img src={iconsSearch} alt="icon search" />
          </div>
        </div>
    </div>
  )
}

export default SearchMovies
const iconsSearch = '/assets/icons/icon-search.svg'
