/*
* @Author: chenchao
* @Date: 2018-04-18 17:09:45
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-23 17:53:17
*/
import './router.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
const Home = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-home" */ '../home/views/home.js'));
const FeDev = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-fedev" */ '../fe-dev/views/fe-dev.js'));
const Health = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-health" */ '../health/views/health.js'));
const SingleDog = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-singledog" */ '../single-dog/views/single-dog.js'));
const She = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-she" */ '../she/views/she.js'));
//const Login = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-login" */ '@global/login/login.js'));
const Nest = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-nest" */ '../nest/nest.js'));

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="app-content">
                <div className="content-box">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/fe-dev" exact component={FeDev} />
                        <Route path="/health" exact component={Health} />
                        <Route path="/single-dog" exact component={SingleDog} />
                        <Route path="/she" exact component={She} />
                        <Route path="/nest" component={Nest} />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </section>
        )
    }
}