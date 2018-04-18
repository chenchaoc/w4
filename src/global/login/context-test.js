/*
* @Author: chenchao
* @Date: 2018-04-17 15:53:56
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-17 17:37:34
*/
import PropTypes from 'prop-types';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextTypes = {
        b: PropTypes.number
    }    
    render() {
        //console.log(this.context)
        return (
            <div>{this.context.b}</div>
        )
    }
}