import profilePicture from "./assets/Me.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePicture} alt="profile picture" />
      <h2 className="card-title">Kolio</h2>
      <p className="card-description">Computer Science and play video games.</p>
    </div>
  );
}

export default Card;
