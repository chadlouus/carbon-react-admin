
import omit from 'lodash/omit'

export default (props) =>
  omit(props, [
    'addLabel',
    'allowEmpty',
    'basePath',
    'cellClassName',
    'className',
    'defaultExpanded',
    'formClassName',
    'headerClassName',
    'label',
    'link',
    'loaded',
    'locale',
    'record',
    'refetch',
    'resource',
    'sortable',
    'sortBy',
    'source',
    'textAlign',
    'translateChoice',
  ])
