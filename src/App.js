import './css/normalize.css';
import { GlobalStyle } from './Globalstyles';
import { Title, Calculator } from './components';

function App() {
    return (
        <>
            <Title />

            <div className='block b1'></div>
            <div className='block b2'></div>
            <div className='block b3'></div>
            <div className='block b4'></div>
            <div className='block b5'></div>
            <div className='block b6'></div>
            <Calculator />
            <GlobalStyle />
        </>
    );
}

export default App;
