import { Admin, Resource, CustomRoutes, ListGuesser, EditGuesser, ShowGuesser, localStorageStore, Notification } from 'react-admin'
import { Route } from 'react-router-dom'

import dataProvider from '../../utils/dataProvider'

import CarbonLayout from '../Layout/carbonLayout.js'
import CarbonG90 from '../../themes/carbon-g90'
import { i18nProvider } from '../i18n/i18nprovider.js'

import {
  Posts,
  MainPage,
  Photos,
} from '../resources'

const store = localStorageStore();
store.setItem('sidebar.open', true);
store.setItem('application.error', false);

const App = (props) => (
  <Admin title="Base Camp" dataProvider={dataProvider} i18nProvider={i18nProvider} 
    layout={CarbonLayout} notification={Notification} theme={CarbonG90} store={store}>
    <Resource name="posts" intent="registration" {...Posts} recordRepresentation="title" />
    <Resource name="comments" intent="registration" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} recordRepresentation="Comment" />
    <Resource name="albums" intent="registration" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} recordRepresentation="title" />
    <Resource name="photos" intent="registration" list={Photos.list} edit={EditGuesser} show={ShowGuesser} recordRepresentation="title" />
    <Resource name="users" intent="registration" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} recordRepresentation="name" />
    <CustomRoutes>
      <Route path="/" element={<MainPage />} />
    </CustomRoutes>
  </Admin>
)

export default App
