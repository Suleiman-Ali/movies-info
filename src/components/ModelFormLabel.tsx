interface ModelFormLabelProps {
  txt: string;
}

function ModelFormLabel({ txt }: ModelFormLabelProps): JSX.Element {
  return <label className="modelForm__label">{txt}</label>;
}

export default ModelFormLabel;
