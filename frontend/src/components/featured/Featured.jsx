import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=damascus,lattakia,homs,aleppo,sednaya,suwayda,jableh,tartous,arwad"
  );

  return (<div className="featured">
    {loading ? (
      <>
        {[...Array(7)].map((_, i) => (
          <div className="featuredItem featuredSkeleton" key={i}>
            <div className="featuredSkeletonImg"></div>
            <div className="featuredTitles">
              <h1>&nbsp;</h1>
              <h2>&nbsp;</h2>
            </div>
          </div>
        ))}
      </>
    ) : (
      <>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt="Damascus skyline"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Damascus';
            }}
          />
          <div className="featuredTitles">
            <h1>Damascus</h1>
            <h2>{data[0] || '0'} properties</h2>
          </div>
        </div>
  
        <div className="featuredItem">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fenglish.aawsat.com%2Farab-world%2F5058524-damascus-governorate-invites-residents-discuss-city%25E2%2580%2599s-future&psig=AOvVaw19OekOwR2GeFHjwI7Fa_pl&ust=1750791377223000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCAzqeciI4DFQAAAAAdAAAAABAE"
            alt="Lattakia coast"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Lattakia';
            }}
          />
          <div className="featuredTitles">
            <h1>Lattakia</h1>
            <h2>{data[1] || '0'} properties</h2>
          </div>
        </div>
  
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Homs city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Homs';
            }}
          />
          <div className="featuredTitles">
            <h1>Homs</h1>
            <h2>{data[2] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Aleppo city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Aleppo';
            }}
          />
          <div className="featuredTitles">
            <h1>Aleppo</h1>
            <h2>{data[3] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Aleppo city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Sednaya';
            }}
          />
          <div className="featuredTitles">
            <h1>Sednaya</h1>
            <h2>{data[4] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Aleppo city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Suwayda';
            }}
          />
          <div className="featuredTitles">
            <h1>Suwayda</h1>
            <h2>{data[5] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Aleppo city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Suwayda';
            }}
          />
          <div className="featuredTitles">
            <h1>Jableh</h1>
            <h2>{data[6] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Aleppo city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Suwayda';
            }}
          />
          <div className="featuredTitles">
            <h1>Tartous</h1>
            <h2>{data[7] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt="Aleppo city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Suwayda';
            }}
          />
          <div className="featuredTitles">
            <h1>Arwad</h1>
            <h2>{data[8] || '0'} properties</h2>
          </div>
        </div>
      </>
    )}
  </div>
  );
};

export default Featured;
