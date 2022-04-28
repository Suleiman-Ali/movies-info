interface PictureOverviewProps {
  text: string;
}

function PictureOverview({ text }: PictureOverviewProps): JSX.Element | null {
  if (text) return <p className="pictureDetails__overview">{text}</p>;
  return null;
}

export default PictureOverview;
