import { CDN_URL } from "../utils/contents";

const Restaurant_card = ({ resData }) => {
    // Ensure resData and resData.info are defined before destructuring
    const {
      info: {
        name = 'Unknown Restaurant',
        cloudinaryImageId = '',
        cuisines = [],
        avgRating = 'N/A',
        sla: { deliveryTime = 'N/A' } = {},
        costForTwo = 'N/A',
      } = {},
      
    } = resData || {};
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0",  borderRadius: "8px", padding: "16px", margin: "16px", maxWidth: "270px",height:"auto" }}>
        <img
          className="res-logo"
          alt={name}
          src={CDN_URL+cloudinaryImageId}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3>{name}</h3>
        <p>Cuisines: {cuisines.join(", ")}</p>
        <p>Rating: {avgRating}</p>
        <p>Delivery Time: {deliveryTime} mins</p>
        <p>{costForTwo}</p>
        
      </div>
    );
  };
  export default Restaurant_card;