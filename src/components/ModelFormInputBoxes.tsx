import { ReactNode } from 'react';

interface ModelFormInputBoxesProps {
  children: ReactNode;
}

function ModelFormInputBoxes({
  children,
}: ModelFormInputBoxesProps): JSX.Element {
  return <div className="modelForm__inputBoxes">{children}</div>;
}

export default ModelFormInputBoxes;
