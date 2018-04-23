/*
* @Author: chenchao
* @Date: 2018-04-04 16:13:56
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-23 11:58:16
*/
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
const One = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-nest-one" */ './one.js'));
const Two = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-nest-two" */ './two.js'));
class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //console.log(this.props)
    }
    render() {
        const { isLogin } = this.props
        return (
            <Fragment>
                { isLogin ? 111: 222 }<br/>
                <Link to="/nest/one">/nest/one</Link><br/>
                <Link to="/nest/two">/nest/two</Link><br/>
                <Switch>
                    <Route path="/nest/one" exact component={One} />
                    <Route path="/nest/two" exact component={Two} />
                </Switch>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Content);