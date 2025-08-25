import BichCham from "../assets/bich_chamm.mp4";

const Love = () => {
  return <div className="love-container">
    <video autoPlay muted loop>
      <source src={BichCham} type="video/mp4"/>
    </video>
  </div>;
};
export default Love;
