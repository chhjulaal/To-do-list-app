function Lists(props) {
  // console.log(props);

  const handleDelete = (index) => {
    const updatedData = props.ListItem.filter((_, i) => i !== index);
    props.listUpdater(updatedData);
  };

  return (
    <div>
      <ol>
        {props.ListItem.map((e, j) => (
          <li key={j}>
            {e}
            <span>
              <i
                style={{ margin: "10px" }}
                className="fa-solid fa-pen-to-square fa-sm"
                onClick={() => {
                  props.editdata(j);
                }}
              ></i>
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  handleDelete(j);
                }}
              ></i>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Lists;
