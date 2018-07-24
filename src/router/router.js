/*
* @Author: chenchao
* @Date: 2018-04-18 17:09:45
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-23 19:15:52
*/
import './router.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
const Index = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-index" */ '../index/views/index.js'));
const Poetry = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-pretry" */ '../poetry/index.js'));
const FeDev = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-fedev" */ '../fe-dev/views/fe-dev.js'));
const Health = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-health" */ '../health/views/health.js'));
const SingleDog = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-singledog" */ '../single-dog/views/single-dog.js'));
const She = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-she" */ '../she/views/she.js'));
//const Login = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-login" */ '@global/login/login.js'));

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="app-content">
                <div className="content-box">
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/poetry" component={Poetry} />
                        <Route path="/fe-dev" component={FeDev} />
                        <Route path="/health" component={Health} />
                        <Route path="/single-dog" component={SingleDog} />
                        <Route path="/she" component={She} />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </section>
        )
    }
}