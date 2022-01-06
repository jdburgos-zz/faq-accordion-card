/** Components **/
import Card from './components/ui/Card/Card';
import Image from './components/Image/Image';
import FaqItems from './components/FaqItems/FaqItems';

/** Styles **/
import './styles/styles.scss';

const App = () => (
  <Card>
    <div className="content">
      <Image />
      <FaqItems />
    </div>
  </Card>
);

export default App;
