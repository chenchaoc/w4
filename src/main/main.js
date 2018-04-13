/*
* @Author: chenchao
* @Date: 2018-04-04 15:31:30
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-13 17:19:55
*/
import { Fragment } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';

const Login = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-login" */ './component/login/login.js'));
const Content = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-content" */ './component/content/content.js'));

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/content" exact component={Content} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}