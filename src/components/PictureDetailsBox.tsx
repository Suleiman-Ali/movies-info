import { ReactNode } from 'react';

interface PictureDetailsBoxProps {
  children: ReactNode;
}

function PictureDetailsBox({ children }: PictureDetailsBoxProps): JSX.Element {
  return <div className="pictureDetails__box">{children}</div>;
}

export default PictureDetailsBox;
