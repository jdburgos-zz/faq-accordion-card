import './styles/styles.scss';
import Card from './components/ui/Card/Card';
import Image from './components/Image/Image';
import FaqItems from './components/FaqItems/FaqItems';

const App = () => (
  <Card>
    <div className="content">
      <Image />
      <FaqItems />
    </div>
  </Card>
);

export default App;
