import React from 'react'
import PropTypes from 'prop-types'; // ES6

const ButtonType = ({label,className}) => {
  return (
    <button className={className}>{label}</button>
  )
}
/**
 * Giống như bạn khai báo kiểu dữ liệu
 * tương tự như TypeScript
 */
ButtonType.propTypes = {
  //string, và bắt buộc điền
  label: PropTypes.string.isRequired,
  //ko bắt buộc, nếu điền thì là string
  className: PropTypes.string
}

export default ButtonType