interface SpinnerProps {
  cls: string;
}

function Spinner({ cls }: SpinnerProps): JSX.Element {
  return <div className={`lds-hourglass ${cls}`}></div>;
}

export default Spinner;
