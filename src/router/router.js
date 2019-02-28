/*
* @Author: chenchao
* @Date: 2018-04-18 17:09:45
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-16 11:48:39
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
        this.state = {
            heightStyle: {}
        }
    }
    componentDidCatch(error, info) { //react16新的生命周期：错误边界
        console.log(error)
        console.log(info)
    }
    componentDidMount(){
    //   alert(window.screen.availHeight)
    //   alert(window.screen.height)
    //   alert(document.body.offsetHeight)
    //   alert(document.body.clientHeight)
    //   alert(document.documentElement.clientHeight)
        this.fixHeight()
    }
    fixHeight() {
        const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        this.setState({
            heightStyle: {
                'minHeight': windowHeight - 60
            }
        })
    }
    render() {
        const { heightStyle } = this.state
        return (
            <section className="app-content" style={heightStyle}>
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