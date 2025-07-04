import "./index.css";

const Icon = ({
  value,
  // theme = "outline", // outline, filled, twoTone
  theme = "filled", // filled, brand
  size,
  color,
  onClick,
  ...rest
}) => {
  // const iconTheme = (theme) => {
  //   switch (theme) {
  //     case "filled":
  //       return "fas";
  //     case "twoTone":
  //       return "fad";
  //     default:
  //       return "fal";
  //   }
  // };
  const iconTheme = (theme) => {
    switch (theme) {
      case "filled":
        return "fas";
      default:
        return "fab";
    }
  };

  const classNames = [
    "inula-icon",
    color ? `inula-icon-${color}` : "",
    iconTheme(theme),
    value ? `fa-${value}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  console.log("Icon props:", rest);

  return (
    <i
      className={classNames}
      style={{ fontSize: `${size}px`, color: `${color}` }}
      onClick={onClick}
      {...rest}
    ></i>
  );
};

export default Icon;
