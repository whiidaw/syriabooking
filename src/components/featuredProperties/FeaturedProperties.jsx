import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (<div className="fp">
    {loading ? (
      <>
        {[...Array(4)].map((_, i) => (
          <div className="fpItem fpSkeleton" key={i}>
            <div className="fpSkeletonImg"></div>
            <div className="fpSkeletonText"></div>
            <div className="fpSkeletonText short"></div>
            <div className="fpSkeletonText medium"></div>
            <div className="fpSkeletonText" style={{width: '40%'}}></div>
          </div>
        ))}
      </>
    ) : (
      <>
        {data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
              src={item.photos[0] || 'https://via.placeholder.com/300x200'}
              alt={item.name}
              className="fpImg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x200';
              }}
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))}
      </>
    )}
  </div>
  );
};

export default FeaturedProperties;
