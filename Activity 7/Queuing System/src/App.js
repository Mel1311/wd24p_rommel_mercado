
import QueueNumber from './components/QueueNumber';
import NowServing from './components/NowServing';
import RegularSeniorPWD from './components/RegularSeniorPWD';
import CounterNumber from './components/CounterNumber';
import NextTransferServe from './components/NextTransferServe';
import TotalServed from './components/TotalServed';
import Introduction from './components/Introduction';

function App() {
  return (
    <div>
      <RegularSeniorPWD />
      <QueueNumber />
      <CounterNumber />
      <NowServing />
      <NextTransferServe />
      <TotalServed />
      <Introduction />
    </div>
  );
}

export default App;
