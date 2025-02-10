const Footer = () => {
  return (
    <div className="mt-20 grid grid-cols-3 bg-gray-100 h-80  justify-items-center">
      <div>
        <h3 className="my-10">Quick Links</h3>
        <ul>
          <li className="mb-1">About us</li>
          <li className="mb-1">Core Values</li>
          <li className="mb-1">Career</li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="my-10">Newsletter</h3>
        <form>
          <label>
            Sign up for our mailing list to get latest Updates and offers.
          </label>
          <input type="text" className="mt-4" />
          <button>Sumbit</button>
        </form>
      </div>
      <div>
        <h3 className="my-10">Customer Service</h3>
        <ul>
          <li className="mb-1">Help Center</li>
          <li className="mb-1">Contact Us</li>
          <li className="mb-1">Acessbility</li>
        </ul>
      </div>
      <div className=" border border-t-2 pt-4 text-center col-span-full w-full">
        <p>Copyright 2023 - Tiwa </p>
      </div>
    </div>
  );
};

export default Footer;
