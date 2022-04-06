interface TitleBoxProps {
  title: string;
}

function TitleBox({ title }: TitleBoxProps): JSX.Element {
  return (
    <div className="titleBox">
      <p className="titleBox__title">{title}</p>
      <button className="titleBox__btn">See More</button>
    </div>
  );
}

export default TitleBox;
