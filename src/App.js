import './App.css';
import './assets/background-animation.css';
import Tabs from './vs-code-layout/tabs';
import SidePainel from './vs-code-layout/side-painel';
import TitleBar from './vs-code-layout/top-bar';
import StatusBar from './vs-code-layout/bottom-bar';
import { useTranslation } from 'react-i18next';
import TabContainer from './vs-code-layout/tabs';



const App = () => {
  const { t } = useTranslation();
  return (
    <div className="App vs-code-the-window">
      <header className="App-header">

        <div className="area" >
          <ul className="circles">
            <li /><li /><li /><li /><li /><li />
          </ul>
        </div>

        <div className="vs-code-window">
          <TitleBar />

          <div className='vs-container'>
            <div className='vs-left-components'>
              <SidePainel />
            </div>
            <div className="vs-right-components">
              <div className="vs-right">
                <TabContainer/>
              </div>
              <div className="vs-right">
                <p className="codeText">{t('under-contruction')}</p>
              </div>
            </div>
          </div>
          <StatusBar />
        </div>
      </header>
    </div>
  );
}
export default App;