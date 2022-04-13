interface PictureTitleProps {
  text: string;
}

function PictureTitle({ text }: PictureTitleProps): JSX.Element {
  return <h1 className="pictureDetails__title">{text}</h1>;
}

export default PictureTitle;
