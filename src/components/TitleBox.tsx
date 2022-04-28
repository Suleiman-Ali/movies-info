import { Link } from 'react-router-dom';

interface TitleBoxProps {
  title: string;
  typeTo: string;
}

function TitleBox({ title, typeTo }: TitleBoxProps): JSX.Element {
  return (
    <div className="titleBox">
      <p className="titleBox__title">{title}</p>
      <Link to={typeTo} className="titleBox__btn">
        See More
      </Link>
    </div>
  );
}

export default TitleBox;
