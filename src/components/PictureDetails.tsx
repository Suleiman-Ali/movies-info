import { ReactNode } from 'react';

interface PictureDetailsProps {
  children: ReactNode;
  cls: string;
}

function PictureDetails({ children, cls }: PictureDetailsProps): JSX.Element {
  return <div className={`pictureDetails ${cls}`}>{children}</div>;
}

export default PictureDetails;
