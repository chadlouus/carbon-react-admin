import jsonServerProvider from "ra-data-json-server";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


/* postgres example 
import postgrestRestProvider from '@bobfang/ra-data-postgrest'
import { serialize } from 'object-to-formdata'
// point to API server
const dataProvider = postgrestRestProvider('/api/ui')

const transformData = (data) => {
  if (typeof data !== 'object' || data === null) {
    return data
  }

  const keys = Object.keys(data)

  if (keys.length === 0) {
    return data
  }

  if (keys.includes('rawFile') && data.rawFile instanceof File) {
    return data.rawFile
  } else {
    const output = Array.isArray(data) ? [] : {}
    keys.forEach((key) => {
      output[key] = transformData(data[key])
    })
    return output
  }
}

const transformDataFiles = (data) => {
  if (typeof data !== 'object' || data === null) {
    return data
  }

  const keys = Object.keys(data)

  if (keys.length === 0) {
    return data
  }

  if (keys.includes('rawFile') && data.rawFile instanceof File) {
    const reader = new FileReader()
    return reader.readAsDataURL(data.rawFile)
  } else {
    const output = Array.isArray(data) ? [] : {}
    keys.forEach((key) => {
      output[key] = transformData(data[key])
    })
    return output
  }
}

const myDataProvider = {
  ...dataProvider,
  update: (resource, params) => {
    switch (resource) {
      case 'lm_training_sets':
      case 'domain_groups_summary':
      case 'domain_sets_summary':
        return dataProvider.update(resource, { ...params, data: serialize(transformData(params.data)) })
      default:
        return dataProvider.update(resource, params)
    }
  },
  create: (resource, params) => {
    switch (resource) {
      case 'audio_summary':
      case 'domain_terms':
      case 'lm_training_sets':
      case 'domain_groups_summary':
      case 'domain_sets_summary':
      case 'domain_terms_summary':
        console.log('converting params.data to FormData')
        return dataProvider.create(resource, { ...params, data: serialize(transformData(params.data)) })
      case 'audio_summary/import':
      case 'lm_grammars/upload':
      case 'lm_corpora_summary/upload':
      case 'redlaf_prompts/upload':
      case 'stt_configurations/upload-nested':
      case 'experiments/upload':
      case 'test_sets_summary/upload':
        console.log('converting params.data to FormData with data')
        return dataProvider.create(resource, { ...params, data: serialize(transformDataFiles(params.data)) })
      default:
        return dataProvider.create(resource, params)
    }
  },
}

export default myDataProvider

*/

export default dataProvider
