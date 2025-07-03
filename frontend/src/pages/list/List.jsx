import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const cities = ["lattakia", "damascus", "homs", "aleppo","sednaya","suwayda","jableh","tartous","arwad"];
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options || {
    adult: 1,
    children: 0,
    room: 1,
  });
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      const newValue = operation === "i" ? prev[name] + 1 : Math.max(prev[name] - 1, name === "adult" || name === "room" ? 1 : 0);
      return {
        ...prev,
        [name]: newValue,
      };
    });
  };

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleClick = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
    reFetch();
  };

// Filter hotels based on capacity (adults + children) and room count
const filteredData = data?.filter(hotel => {
  // Calculate total required capacity
  const totalPeople = options.adult + options.children;
  // Use the hotel's maxPeople value from the database
  const totalCapacity = options.room * hotel.maxPeople;
  
  // Check if the hotel can accommodate the required people with the requested rooms
  return totalPeople <= totalCapacity;
});

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
  <label>Destination</label>
  <div className="customSelect">
    <select
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      className="modernSelect"
    >
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
    <span className="selectArrow">▼</span>
  </div>
</div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night/room</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night/room</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <div className="lsOptionCounter">
                    <button 
                      disabled={options.adult <= 1}
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button onClick={() => handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <div className="lsOptionCounter">
                    <button 
                      disabled={options.children <= 0}
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button onClick={() => handleOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <div className="lsOptionCounter">
                    <button 
                      disabled={options.room <= 1}
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button onClick={() => handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {filteredData?.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;