const Highlight = (prop) => {
  const highlightData = prop.data;
  console.log(highlightData);

  return (
    <div>
      <div>
        <img src={highlightData.image} alt="" className="" />
      </div>
      <div>
        <div className="flex gap-2 mb-1">
          <span>Alukas</span>
          <span>.</span>
          <span>FEBRUARY 17, 2023</span>
        </div>
        <h2 className="mb-1">Christmas Gift Guide</h2>
        <p className="mb-1">Oneself...</p>
        <a href="mb-1">continue Reading</a>
      </div>
    </div>
  );
};

export default Highlight;
