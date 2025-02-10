const Header = () => {
  return (
    <div className="flex justify-between p-4 absolute left-0 right-0">
      <nav>
        <ul className="flex space-x-5">
          <li className="">Home</li>
          <li className="">Product</li>
          <li className="">About</li>
          <li className="">Contact</li>
        </ul>
      </nav>
      <div>
        <ul className="flex space-x-5">
          <li className="">icon</li>
          <li className="">icon</li>
          <li className="">icon</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
