import "./SearchArea.css";

function SearchArea({ setSearchPlace, setMinYear }) {
  const searchByPlace = (e) => setSearchPlace(e.target.value);
  const searchByYear = (e) => setMinYear(+e.target.value);

  return (
    <div id="search-area">
      <input
        type="text"
        placeholder="🔍 Search by Place"
        onChange={searchByPlace}
      />

      <div id="year-s-area">
        <label>Min Year:</label>
        <input type="text" onChange={searchByYear} />
      </div>
    </div>
  );
}
export default SearchArea;
