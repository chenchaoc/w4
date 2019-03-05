/*
* @Author: chenchao
* @Date: 2018-03-30 16:59:25
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-29 12:12:33
*/
import './app.scss';
import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//antd中文化
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import store from './redux/store.js';
import Header from '@global/header/header.js';
import Footer from '@global/footer/footer.js';
import RouterMap from './router/router.js';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={store}>
                <LocaleProvider locale={zhCN}>
                    <BrowserRouter>
                        <Fragment>
                            <Header />
                            <RouterMap />
                            <Footer />
                        </Fragment>
                    </BrowserRouter>
                </LocaleProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
