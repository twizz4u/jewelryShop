const Footer = () => {
  return (
    <div className="mt-20 grid grid-cols-1 bg-gray-100 justify-items-center">
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
          <div className="flex mt-4 gap-2 justify-center ">
            <input type="text" className="" />
            <button className="bg-zinc-900 text-fuchsia-100 p-1 rounded-sm">
              Sumbit
            </button>
          </div>
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
