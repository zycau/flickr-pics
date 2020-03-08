import PropTypes from 'prop-types'

// PropTypes of index, generate array from 0 to 19
export const indexTypes = PropTypes.oneOf([...Array(20).keys()]).isRequired