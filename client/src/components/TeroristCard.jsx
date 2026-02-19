import "./TerroristCard.css";

function TeroristCard({ terorist }) {
  return (
    <tr className={`row-animate`}>
      <td>{terorist[0]}</td>
      <td>{terorist[1]}</td>
      <td>{terorist[2]}</td>
      <td>{terorist[3]}</td>
      <td>{terorist[4]}</td>
      <td className="summary-cell">{terorist[5]}</td>
      <td>{terorist[6]}</td>
      <td>{terorist[7]}</td>
      <td>{terorist[8]}</td>
      <td>{terorist[9]}</td>
      <td>{terorist[10]}</td>
    </tr>
  );
}

export default TeroristCard;
