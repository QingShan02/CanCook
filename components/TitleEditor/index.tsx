

const TitleEditor = ({value,handleChange}:any) => {
  return (
    <div className="form-outline">
      <input type="text"  className="form-control"  value={value} onChange={handleChange}/>
    </div>
  );
};

export default TitleEditor;
