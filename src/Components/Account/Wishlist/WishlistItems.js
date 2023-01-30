import React from "react";
import "../../../css/wishlist.css";
function WishlistItems(params) {
  return (
    <>
      <div className="navWishlist">
        <div className="para_AccountWishlist">
          <h2>Your Wishlist</h2>
        </div>

        <div className="Wishlistpara">
          <p>You Have No Items in Your Wishlist Yet!</p>
        </div>
      </div>
    </>
  );
}
export default WishlistItems;
