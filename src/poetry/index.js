/*
* @Author: chenchao
* @Date: 2018-04-25 11:01:08
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-07 14:41:50
*/
import { Fragment } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PoetryIndex = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-index" */ './views/poetry-index.js'));
const PoetryInfo = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-info" */ './views/poetry-info.js'));
const PoetryPic = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-pic" */ './views/poetry-pic.js'));

class Poetry extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //console.log(this.props)
    }
    render() {
        const { match } = this.props
        return (
            <Fragment>
                <Switch>
                    <Route path={ `${match.url}/info/:itemId` } component={PoetryInfo}></Route>
                    <Route path={ `${match.url}/pic/:itemId` } component={PoetryPic}></Route>
                    {/*最基本路由写在最下面,还不能使用exact,否则嵌套路由无法匹配?*/}
                    <Route path={ `${match.url}` } component={PoetryIndex}></Route>
                    <Redirect to={ `${match.url}` }></Redirect>
                </Switch>
            </Fragment>
        )
    }   
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Poetry);