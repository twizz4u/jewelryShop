const Highlight = (prop) => {
  const highlightData = prop.data;
  console.log(highlightData);

  return (
    <div>
      <img src={highlightData.image} alt="" />
      <div>
        <div className="flex gap-2 mb-1">
          <h3>Alukas</h3> . <p>FEBRUARY 17, 2023</p>
        </div>
        <h2 className="mb-1">Christmas Gift Guide</h2>
        <p className="mb-1">Oneself...</p>
        <a href="mb-1">continue Reading</a>
      </div>
    </div>
  );
};

export default Highlight;
