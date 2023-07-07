import * as React from 'react'
import { Edit, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin'

import { Toolbar } from 'components/carbon-ra'

const PostEdit = () => (
  <Edit>
    <SimpleForm toolbar={<Toolbar />}>
      <TextInput source="title" fullWidth/>
      <TextInput source="body" fullWidth />
      <ReferenceInput source="userId" reference="users">
        <SelectInput fullWidth/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export default PostEdit
