import * as React from 'react'
import { useRecordContext } from 'react-admin'

const audioName = (name, extension) => {
  return (
    <span>
      {name}
      <b>{extension}</b>
    </span>
  )
}

const AudioFileField = (props) => {
  const record = useRecordContext(props)
  return record && record.extension && record.name ? audioName(record.name, record.extension) : null
}

export default AudioFileField
