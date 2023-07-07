import { Datagrid, TextField, ReferenceField, UrlField, ImageField } from 'react-admin'
import { Typography } from '@mui/material'
import { EditButton, List, ShowButton } from 'components/carbon-ra'


const PhotosList = () => (
  <List hasCreate>
    <Datagrid>
      <ReferenceField source="albumId" reference="albums" />
      <TextField source="id" />
      <TextField source="title" />
      <UrlField source="url" />
      <ImageField source="thumbnailUrl" />
    </Datagrid>
  </List>
)

export default PhotosList
