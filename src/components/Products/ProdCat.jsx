const ProdCat = (prop) => {
  const { id, category, image } = prop.data;

  console.log(id);
  return (
    <div className="h-56 relative">
      <img src={image} alt="" className="h-full w-full" />
      <h3 className="absolute top-3/4 left-1/2 -translate-x-1/2 px-20 py-2 bg-white">
        {category}
      </h3>
    </div>
  );
};

export default ProdCat;
