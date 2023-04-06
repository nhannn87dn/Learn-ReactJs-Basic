import PropTypes from 'prop-types';

function Button({label, icon, customClass}){
    return (
        <button type="button">{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    customClass: PropTypes.string,
}

export default Button;