import AccountDetails from "../Components/Account/AccountDetails";
import AccountSecurity from "../Components/Account/AccountSecurity";
import Addresses from "../Components/Account/Addresses/parentAddresses";
import Orders from "../Components/Account/Orders/parentOrders";
import Wishlist from "../Components/Account/Wishlist/parentWishlist";
import Support from "../Components/Account/Support";

export default [
  {
    id: 1,
    name: "Account Details",
    element: <AccountDetails />,
    path: "/me/account-details",
  },
  {
    id: 2,
    name: "Account Security",
    element: <AccountSecurity />,
    path: "/me/account-security",
  },
  {
    id: 3,
    name: "Addresses",
    element: <Addresses />,
    path: "/me/addresses",
  },
  { id: 4, name: "Orders", element: <Orders />, path: "/me/order" },
  {
    id: 5,
    name: "Wishlist",
    element: <Wishlist />,
    path: "/me/wishlist",
  },
  { id: 6, name: "Support", element: <Support />, path: "/me/support" },
];
