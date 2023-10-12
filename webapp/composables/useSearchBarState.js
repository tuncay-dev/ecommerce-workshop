export const useSearchBarState = () => {
  const searchBarState = useState("searchBarState", () => true)
  const toggleSearchBarState = () => {
    searchBarState.value = !searchBarState.value;
  };
  return { searchBarState, toggleSearchBarState }
};