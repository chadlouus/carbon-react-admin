
import React from 'react'
import { List as ReactAdminList, BulkDeleteButton, Pagination as ReactAdminPagination } from 'react-admin'

import ListActions from '../ListActions'

const List = ReactAdminList

const DefaultRowsPerPageOptions = [10, 25, 50] // doubled our rows per page

List.defaultProps = {
  undoable: false,
  perPage: 10,
  pagination: <ReactAdminPagination rowsPerPageOptions={DefaultRowsPerPageOptions} />,
  actions: <ListActions />,
}

export default List
