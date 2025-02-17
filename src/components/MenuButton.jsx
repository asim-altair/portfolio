const MenuButton = ({ title, icon }) => {
  return (
    <div className="button">
      <i className={icon}></i>
      <p>{title}</p>
    </div>
  );
};

export default MenuButton;
