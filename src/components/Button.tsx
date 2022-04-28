interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps): JSX.Element {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
