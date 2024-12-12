const ButtonTestV2 = (props) => {
  return <button>{props.label}</button>;
};
ButtonTestV2.defaultProps = {
  label: "Default v2",
};

export default ButtonTestV2;
