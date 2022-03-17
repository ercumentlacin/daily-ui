import avatar from "assets/1558/avatar.svg";
import location from "assets/1558/location.svg";

export default function ProfileCard() {
  return (
    <div className="container">
      <section className="daily">
        <div className="d-1558-profile__card">
          <div className="d-1558-profile__card__front">
            <button
              type="button"
              className="d-1558-profile__card__front__hamburger"
            >
              <span />
              <span />
            </button>

            <img
              className="d-1558-profile__card__front__avatar"
              src={avatar}
              alt="Red haired girl in nature looking around"
              loading="lazy"
            />

            <div className="d-1558-profile__card__front__about">
              <h2 className="d-1558-profile__card__front__name">
                Daniel Joffrion
              </h2>

              <div className="d-1558-profile__card__front__location">
                <img src={location} alt="location icon" />
                <span>Atlanta, GA</span>
              </div>
            </div>

            <button
              type="button"
              className="d-1558-profile__card__front__view-content"
            >
              View Content
            </button>

            <div className="d-1558-profile__card__front__elipse-one" />
            <div className="d-1558-profile__card__front__elipse-two" />
          </div>

          <div className="d-1558-profile__card__back" />
        </div>
      </section>
    </div>
  );
}
