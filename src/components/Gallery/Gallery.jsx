import "./Gallery.css";
import { galleryProjects } from "../../utils/constants.js";

function Gallery() {
  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-title">
      <div className="section__heading">
        <div>
          <p className="eyebrow">Project Gallery</p>
          <h2 id="gallery-title">A place for the work that defines A1-J.</h2>
        </div>
        <p>
          Explore construction, framing, exterior improvements, roofing, and
          installation work completed with careful attention to every stage.
        </p>
      </div>
      <div className="gallery">
        {galleryProjects.map((project) => (
          <article className="gallery-card" key={project.id}>
            <div className="gallery-card__image-wrap">
              <img
                className="gallery-card__image"
                src={project.image}
                alt={project.alt}
                loading="lazy"
              />
              <span className="gallery-card__slot">{String(project.id).padStart(2, "0")}</span>
            </div>
            <div className="gallery-card__content">
              <h3>{project.title}</h3>
              <p>{project.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
