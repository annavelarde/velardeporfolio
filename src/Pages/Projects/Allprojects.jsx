import "./Allprojects.css";

function Allprojects() {
  return (
    <div>
      <section className="cards">
        <article className="card card--1">
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category"> Project</span>
            <h3 className="card__title">First Project ....</h3>
            <span className="card__by">
              by{" "}
              <a href="#" className="card__author" title="author">
                Anna Velarde
              </a>
            </span>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Allprojects;
