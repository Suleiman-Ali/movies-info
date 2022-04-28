import { ReactNode } from 'react';

interface ModelFormBoxProps {
  children: ReactNode;
}

function ModelFormBox({ children }: ModelFormBoxProps): JSX.Element {
  return <div className="modelForm__Box">{children}</div>;
}

export default ModelFormBox;
