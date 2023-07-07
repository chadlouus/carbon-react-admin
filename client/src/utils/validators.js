
/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'
import isUUID from 'validator/lib/isUUID'
import isURL from 'validator/lib/isURL'

import { XMLValidator } from 'fast-xml-parser'


const VALID_PROMPT_TYPES_ARR = ['read_exactly', 'follow_instructions']

export const VALID_PROMPT_TYPES = VALID_PROMPT_TYPES_ARR.map((x) => ({ id: x, name: x.replace('_', ' ') }))

const VALID_BASE_MODELS_ARR = [
  'en-US_BroadbandModel',
  'en-US_Multimedia',
  'en-US_NarrowbandModel',
  'en-US_Telephony',
  'en-WW_Medical_Telephony',
  'en-IN_Telephony',
  'en-US_ShortForm_NarrowbandModel',
  'en-GB_BroadbandModel',
  'en-GB_NarrowbandModel',
  'en-GB_Telephony',
  'en-GB_Multimedia',
  'en-AU_BroadbandModel',
  'en-AU_NarrowbandModel',
  'en-AU_Telephony',
  'en-AU_Multimedia',
  'ar-MS_BroadbandModel',
  'ar-MS_Telephony',
  'pt-BR_BroadbandModel',
  'zh-CN_BroadbandModel',
  'zh-CN_Telephony',
  'cs-CZ_Telephony',
  'nl-NL_BroadbandModel',
  'fr-FR_BroadbandModel',
  'fr-FR_Multimedia',
  'fr-CA_Multimedia',
  'fr-CA_BroadbandModel',
  'de-DE_BroadbandModel',
  'de-DE_Multimedia',
  'it-IT_BroadbandModel',
  'ja-JP_BroadbandModel',
  'ko-KR_BroadbandModel',
  'es-AR_BroadbandModel',
  'es-ES_BroadbandModel',
  'es-CL_BroadbandModel',
  'es-CO_BroadbandModel',
  'es-MX_BroadbandModel',
  'es-PE_BroadbandModel',
  'pt-BR_NarrowbandModel',
  'pt-BR_Telephony',
  'zh-CN_NarrowbandModel',
  'nl-NL_NarrowbandModel',
  'nl-NL_Telephony',
  'nl-BE_Telephony',
  'fr-CA_Telephony',
  'fr-FR_NarrowbandModel',
  'fr-FR_Telephony',
  'fr-CA_NarrowbandModel',
  'de-DE_NarrowbandModel',
  'de-DE_Telephony',
  'it-IT_NarrowbandModel',
  'it-IT_Telephony',
  'it-IT_Multimedia',
  'ja-JP_NarrowbandModel',
  'ja-JP_Multimedia',
  'ko-KR_NarrowbandModel',
  'kr-KR_Multimedia',
  'kr-KR_Telephony',
  'es-AR_NarrowbandModel',
  'es-ES_NarrowbandModel',
  'es-ES_Telephony',
  'es-ES_Multimedia',
  'es-LA_Telephony',
  'es-CL_NarrowbandModel',
  'es-CO_NarrowbandModel',
  'es-MX_NarrowbandModel',
  'es-PE_NarrowbandModel',
  'sv-SE_Telephony',
]

export const VALID_BASE_MODELS = VALID_BASE_MODELS_ARR.map((x) => ({ id: x, name: x }))

export const VALID_TOKENIZER_POFILES = [
  { id: 'case_insensitive', name: 'Case Insensitive - Telephony/Multimedia' },
  { id: 'model_case_insensitive', name: 'Tokenized Case Insensitive - Narrow/Broadband' },
  { id: 'model', name: 'Tokenized Case Sensitive - Narrow/Broadband' },
  { id: 'none', name: 'Case Sensitive' },
]

export const VALID_STT_AUTHENTICATORS = [
  { id: 'IAMAuthenticator', name: 'IAM Authentication' },
  { id: 'CloudPakForDataAuthenticator', name: 'CP4D Authentication' },
  { id: 'BearerTokenAuthenticator', name: 'Bearer Token Authentication' },
]

const urlValidationSchema = yup
  .string()
  .test('url', 'URL is not valid', (v) => (v ? isURL(v, { require_valid_protocol: true }) : true))

const VALID_BASE_MODELS_REGEX = /[a-z]{2}\-[A-Z]{2}_\w+/

const baseModelValidationSchema = yup
  .string()
  .required()
  .matches(VALID_BASE_MODELS_REGEX, 'Base model name is not valid!')
  //.oneOf(VALID_BASE_MODELS_ARR, 'This is not a valid base model')
  .default(() => VALID_BASE_MODELS_ARR[0])

const sttConfigurationValidationSchema = yup.object({
  model: baseModelValidationSchema,
  language_customization_id: yup
    .string()
    .nullable()
    .test('uuid', 'the language customization id is not valid uuid', (v) => (v ? isUUID(v) : true))
    .when('grammar_name', {
      is: (v) => !!v,
      then: yup.string().required('language customization id is required when grammer_name is specified'),
      otherwise: yup.string(),
    }),
  acoustic_customization_id: yup
    .string()
    .nullable()
    .test('uuid', 'the acoustic customization id is not valid uuid', (v) => (v ? isUUID(v) : true)),
  customization_weight: yup.number().min(0.0).max(1.0).default(0.3),
  character_insertion_bias: yup.number().min(0.0).max(1.0).default(0),
  smart_formatting: yup.boolean(),
  profanity_filter: yup.boolean(),
  grammar_name: yup.string().nullable(),
  redaction: yup.boolean(),
  split_transcript_at_phrase_end: yup.boolean(),
})

const sttInstanceValidationSchema = yup.object({
  service_url: urlValidationSchema,

  ssl_cert: yup.string().nullable(),
})

const customWordValidationSchema = yup
  .object({
    word: yup.string().required(),
    display_as: yup.string().nullable(),
    sounds_like: yup
      .array(
        yup
          .string()
          .required()
          .test('no-numbers', '${path} should not contain numbers', (value) => !/\d/.test(value))
      )
      .max(5)
      .nullable(),
  })
  .noUnknown()

const customWordsJsonValidationSchema = yup.object({
  words: yup.array(customWordValidationSchema.required()),
})

const soundsLikeValidationSchema = yup
  .array(
    yup
      .string()
      .required()
      .test('no-numbers', '${path} should not contain numbers', (value) => !/\d/.test(value))
  )
  .max(5)

const nameValidationSchema = yup.string().required().notOneOf(['new'])

const nameCorporaValidationSchema = yup.string().required().notOneOf(['user'])

const nameGrammarsValidationSchema = yup.string().required().notOneOf(['user'])

export const isValidSoundsLike = (value) => {
  try {
    console.log(value)
    soundsLikeValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidCustomWord = (value) => {
  try {
    console.log(value)
    console.log(customWordsJsonValidationSchema.validateSync(value))
    customWordsJsonValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidURL = (value) => {
  try {
    urlValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidSttInstance = (value) => {
  try {
    sttInstanceValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidName = (value) => {
  try {
    nameValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidSttModel = (value) => {
  try {
    baseModelValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidSttConfig = (value) => {
  try {
    sttConfigurationValidationSchema.validateSync(value)
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidSingleCustomWord = (value) => {
  try {
    console.log(value)
    customWordValidationSchema.validateSync(value, {
      strict: true,
    })
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidCustomWordsJson = (value) => {
  try {
    console.log(value)
    customWordsJsonValidationSchema.validateSync(value, {
      strict: true,
    })
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidJson = (value) => {
  if (typeof value === 'string') {
    try {
      JSON.parse(value)
    } catch (err) {
      return 'Not a valid JSON - Fix before saving'
    }
  }
}

export const isValidXml = (value) => {
  if (typeof value === 'string') {
    console.log(XMLValidator.validate(value))
    if (typeof XMLValidator.validate(value) === 'object') {
      return 'Not a valid XML - Fix before saving'
    }
  }
}

export const isValidCorporaName = (value) => {
  try {
    nameCorporaValidationSchema.validateSync(value, {
      strict: true,
    })
  } catch (err) {
    return err.errors[0]
  }
}

export const isValidGrammarsName = (value) => {
  try {
    nameGrammarsValidationSchema.validateSync(value, {
      strict: true,
    })
  } catch (err) {
    return err.errors[0]
  }
}
