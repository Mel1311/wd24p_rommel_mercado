
import QueueNumber from './components/QueueNumber';
import NowServing from './components/NowServing';
import RegularSeniorPWD from './components/RegularSeniorPWD';
import CounterNumber from './components/CounterNumber';
import NextTransferServed from './components/NextTransferServed';
import TotalServed from './components/TotalServed';
import Introduction from './components/Introduction';

function App() {
  return (
    <div>
      <RegularSeniorPWD />
      <QueueNumber />
      <CounterNumber />
      <NowServing />
      <NextTransferServed />
      <TotalServed />
      <Introduction />
    </div>
  );
}

export default App;
