
import React from 'react'
import { Create as ReactAdminCreate } from 'react-admin'

import CreateActions from './CreateActions'

const Create = ReactAdminCreate

Create.defaultProps = {
  actions: <CreateActions />,
}

export default Create
