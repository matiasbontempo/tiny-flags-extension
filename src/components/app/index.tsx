import { useState } from 'react';
import type { FunctionComponent } from 'react';

import Layout from '@components/layout';

import FlagsScreen from '@screens/flags';
import InfoScreen from '@screens/info';

const pagesMapper: Record<string, FunctionComponent> = {
  flag: FlagsScreen,
  info: InfoScreen,
};

const App = () => {
  const [selected, setSelected] = useState('flag');
  const Page = pagesMapper[selected];
  return <Layout activeTab={selected} onTabChange={setSelected}><Page /></Layout>;
};

export default App;
