/*
* @Author: chenchao
* @Date: 2018-04-04 16:13:56
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 11:33:45
*/
import { connect } from 'react-redux';
import { Fragment } from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { isLogin } = this.props
        return (
            <Fragment>
                { isLogin ? 111: 222}
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Content);