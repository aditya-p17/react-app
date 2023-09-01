interface Props {
  children: String;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "light"
    | "dark";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
