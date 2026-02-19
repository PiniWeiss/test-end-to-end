import "./SearchArea.css";

function SearchArea({ setSearchPlace, setMinYEar }) {
  const searchByPlace = (e) => setSearchPlace(e.target.value);
  const searchByYear = (e) => setMinYEar(+e.target.value);

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
