import "./index.css";

const Filters = ({ setActiveFilters, activeFilters }) => {
  const onHandleRumFilter = () =>
    setActiveFilters((prev) => ({ ...prev, rum: !prev.rum }));
  const onHandleVodkaFilter = () =>
    setActiveFilters((prev) => ({ ...prev, vodka: !prev.vodka }));
  const onHandleGinFilter = () =>
    setActiveFilters((prev) => ({ ...prev, gin: !prev.gin }));
  return (
    <div className="filters">
      <div
        className={activeFilters.rum ? "filter" : "filter filtered"}
        onClick={onHandleRumFilter}
      >
        Rum
      </div>
      <div
        className={activeFilters.vodka ? "filter" : "filter filtered"}
        onClick={onHandleVodkaFilter}
      >
        Vodka
      </div>
      <div
        className={activeFilters.gin ? "filter" : "filter filtered"}
        onClick={onHandleGinFilter}
      >
        Gin
      </div>
    </div>
  );
};
export default Filters;
