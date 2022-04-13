interface PictureOverviewProps {
  text: string;
}

function PictureOverview({ text }: PictureOverviewProps): JSX.Element {
  return <p className="pictureDetails__overview">{text}</p>;
}

export default PictureOverview;
