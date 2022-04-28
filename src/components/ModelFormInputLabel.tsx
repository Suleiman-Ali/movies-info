interface ModelFormInputLabelProps {
  txt: string;
  condition: boolean;
  onClick: () => void;
}

function ModelFormInputLabel({
  txt,
  condition,
  onClick,
}: ModelFormInputLabelProps): JSX.Element {
  return (
    <label
      className={`modelForm__inputLabel ${condition ? 'selected' : ''}`}
      onClick={onClick}
    >
      {txt}
    </label>
  );
}

export default ModelFormInputLabel;
