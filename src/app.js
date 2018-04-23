/*
* @Author: chenchao
* @Date: 2018-03-30 16:59:25
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-23 11:40:55
*/
import './app.scss';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store.js';
import Header from '@global/header/header.js';
import Footer from '@global/footer/footer.js';
import RouterMap from './router/router.js';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <RouterMap />
                        <Footer />
                    </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));