interface SettingsIconProps {
  iconPath: string;
  onClick: () => void;
}

function SettingsIcon({ iconPath, onClick }: SettingsIconProps): JSX.Element {
  return <i className={`bi settings__btn ${iconPath}`} onClick={onClick}></i>;
}

export default SettingsIcon;
