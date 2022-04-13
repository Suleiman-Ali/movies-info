interface DetailProps {
  text: string;
}

function Detail({ text }: DetailProps): JSX.Element {
  return <p className="pictureDetails__detail">{text}</p>;
}

export default Detail;
