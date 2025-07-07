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
            src="https://i.pinimg.com/736x/b6/6d/23/b66d23c9b21e86f4dfea0eaaabd37d9b.jpg"
            alt="Damascus "
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
            src="https://i.pinimg.com/736x/c1/29/a4/c129a4bb4fdb0a659a10e194494aef81.jpg"
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
            src="https://i.pinimg.com/736x/75/66/57/7566572aaa41775bdfbfad2d3ad4837c.jpg"
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
            src="https://i.pinimg.com/736x/5d/5f/b2/5d5fb253dcb903482e74bf9afdb8dc38.jpg"
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
            src="https://i.pinimg.com/736x/6f/8d/5f/6f8d5f01560422e5368094a679f91a13.jpg"
            alt="Sednaya city view"
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
            src="https://i.pinimg.com/736x/3b/68/10/3b68103f7acaceba92e14f4303971634.jpg"
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
            src="https://i.pinimg.com/736x/f9/d3/9f/f9d39f7f9293ac42b952c8b4b6a65aaf.jpg"
            alt="Jableh city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Jableh';
            }}
          />
          <div className="featuredTitles">
            <h1>Jableh</h1>
            <h2>{data[6] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://i.pinimg.com/736x/07/e6/22/07e6223b82279a372c258ce19328f558.jpg"
            alt="Tartous city view"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Tartous';
            }}
          />
          <div className="featuredTitles">
            <h1>Tartous</h1>
            <h2>{data[7] || '0'} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://i.pinimg.com/736x/13/0a/00/130a00e35133bf5f8566df498d7de3e2.jpg"
            alt="Arwad"
            className="featuredImg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400?text=Arwad';
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
