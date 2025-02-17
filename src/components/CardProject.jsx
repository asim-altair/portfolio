const CardProject = ({ image, tags, title }) => {
  return (
    <div className="card">
      <img src={image} alt="project image" />
      <div className="card-detail">
        <div className="tags">
          {tags.map((item, index) => (
            <p key={index} className="tag">
              {item}
            </p>
          ))}
        </div>

        <div className="link">
          <h4>{title}</h4>
          <i class="fa-solid fa-up-right-from-square"></i>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
