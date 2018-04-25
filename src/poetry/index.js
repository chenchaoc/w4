/*
* @Author: chenchao
* @Date: 2018-04-25 11:01:08
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-25 16:18:23
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
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/poetry/info/:itemId" component={PoetryInfo}></Route>
                    <Route path="/poetry/pic/:itemId" component={PoetryPic}></Route>
                    <Route path="/poetry" component={PoetryIndex}></Route>
                    <Redirect to="/poetry"></Redirect>
                </Switch>
            </Fragment>
        )
    }   
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Poetry);