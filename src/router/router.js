/*
* @Author: chenchao
* @Date: 2018-04-18 17:09:45
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-19 15:44:37
*/
import './router.scss';
import { Route, Switch } from 'react-router-dom';
const Login = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-login" */ '@global/login/login.js'));
const Nest = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-nest" */ '../nest/nest.js'));
import ygfp from '@image/ygfp.jpg';
console.log(ygfp)
export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="app-content">
                <div className="content-banner">
                    <img className="w100-h100" src={ygfp} alt="云谷飞瀑"/>
                </div>
                <div className="content-box main-box">
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/nest" component={Nest} />
                    </Switch>
                </div>
            </div>
        )
    }
}