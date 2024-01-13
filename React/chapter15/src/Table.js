import Row from "./Row";
const Table = ({ elements }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {elements.map((element) => (
            <Row key={element.id} element={element} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
