/*
* @Author: chenchao
* @Date: 2018-04-25 11:01:08
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-02 16:36:27
*/
import { Fragment } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PoetryIndex = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-index" */ './views/poetry-index.js'));
const PoetryInfo = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-info" */ './views/poetry-info.js'));
const PoetryPic = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-pic" */ './views/poetry-pic.js'));
const PoetryMatch = ac.asyncComponent(() => import(/* webpackChunkName: "async-react-peotry-match" */ './views/poetry-match.js'));

class Poetry extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        const { match } = this.props
        return (
            <Fragment>
                <Switch>
                    <Route path={ `${match.url}/info/:itemId` } component={PoetryInfo}></Route>
                    <Route path={ `${match.url}/pic/:itemId` } component={PoetryPic}></Route>
                    {/*最基本路由写在最下面,还不能使用exact,否则嵌套路由无法匹配?*/}
                    <Route path={ `${match.url}/:itemId` } component={PoetryIndex}></Route>
                    <Route path={ `${match.url}` } component={PoetryMatch}></Route>
                    <Redirect to={ `${match.url}` }></Redirect>
                </Switch>
                {/*嵌套子路由，若要一进去就能显示激活路由，必须进入/poetry/project 或者 /poetry/jiu*/}
                {/*<Link to="/poetry/project">进入/poetry/project，此时进入页面会有激活状态   nav(project)颜色变红并且有下划线</Link>*/}
            </Fragment>
        )
    }   
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Poetry);