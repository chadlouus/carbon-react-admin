
import React from 'react'
import { Pagination as RaPagination } from 'react-admin'

const Pagination = (props) => !!props.total && <RaPagination {...props} />

export default Pagination
