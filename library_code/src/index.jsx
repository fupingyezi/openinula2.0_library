import { render } from '@openinula/next';
import './index.css';
import Button from './components/button/demo.jsx';

function App() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="hero-title animate__animated animate__fadeInDown">欢迎使用 inula-next 组件库!</h1>
        <p className="hero-subtitle animate__animated animate__fadeInUp">Button 组件</p>
        <div className="hero-content">
          <Button />
        </div>
        <p className="hero-subtitle animate__animated animate__fadeInUp">Button 组件</p>
        <div className="hero-content">
          <Button />
        </div>
      </div>

    </div>
  );
}

render(<App />, document.getElementById('root'));
