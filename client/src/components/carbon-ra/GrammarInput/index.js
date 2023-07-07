import AceEditor from 'react-ace'
import { useInput, useTranslateLabel, useTheme } from 'react-admin'

import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-text'
import 'ace-builds/src-noconflict/mode-xml'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-monokai'

const GrammarInput = (props) => {
  const { onChange, onBlur, mode, ...rest } = props
  const [theme, setTheme] = useTheme()
  const translateLabel = useTranslateLabel()
  const {
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
    isRequired,
  } = useInput({
    // Pass the event handlers to the hook but not the component as the field property already has them.
    // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
    onChange,
    onBlur,
    ...props,
  })
  // manually determine if initial input value was null, in order to avoid crashing this component
  if (!field.value) {
    field.value = []
  }
  return (
    <AceEditor
      mode={mode || 'text'}
      theme={theme.carbon === 'g90' ? 'monokai' : 'github'}
      {...field}
      label={translateLabel({ label: props.label, resource: props.resource, source: props.source })}
      error={(isTouched || isSubmitted) && invalid}
      helperText={(isTouched || isSubmitted) && invalid ? error : ''}
      required={isRequired}
      style={{ width: '100%' }}
      {...rest}
    />
  )
}

export default GrammarInput
