/**
 * rfce
 * rafce
 */
interface IButton {
  label: string;
  icon: React.ReactNode;
  onHandleClick: () => void;
}
/**
 * props = {label: '', icon: ''}
 * {label: '', icon: ''} = props
 */
const Button = ({ label, icon, onHandleClick }: IButton) => {
  return (
    <button onClick={onHandleClick}>
      {icon} {label}
    </button>
  );
};

export default Button;
