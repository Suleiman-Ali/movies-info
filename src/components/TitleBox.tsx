import { Link } from 'react-router-dom';

interface TitleBoxProps {
  title: string;
  to: string;
}

function TitleBox({ title, to }: TitleBoxProps): JSX.Element {
  return (
    <div className="titleBox">
      <p className="titleBox__title">{title}</p>
      <Link to={to} className="titleBox__btn">
        See More
      </Link>
    </div>
  );
}

export default TitleBox;
