/*
* @Author: chenchao
* @Date: 2018-04-18 17:09:45
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-18 18:54:32
*/
import './router.scss';
import { Route, Switch } from 'react-router-dom';
const Login = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-login" */ '@global/login/login.js'));
const Nest = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-nest" */ '../nest/nest.js'));

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="app-content">
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/nest" component={Nest} />
                </Switch>
            </div>
        )
    }
}