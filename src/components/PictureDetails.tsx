import { ReactNode } from 'react';

interface PictureDetailsProps {
  children: ReactNode;
}

function PictureDetails({ children }: PictureDetailsProps): JSX.Element {
  return <div className="pictureDetails">{children}</div>;
}

export default PictureDetails;
