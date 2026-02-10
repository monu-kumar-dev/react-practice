function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://images.indianexpress.com/2021/01/myntra.png"
        alt="Myntra Logo"
        height="80px"
        width="80px"
      />
      <div className="option">
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
        <button>HOME</button>
        <button>BEAUTY</button>
        <button>GENZ</button>
        <button>STUDIO</button>
      </div>

      <input
        className="searchBar"
        placeholder="Search for products brands and more"
      ></input>

      <div className="profile">
        <button>Profile</button>
        <button>Wishlist</button>
        <button>Bag</button>
      </div>
    </div>
  );
}

export default Header;