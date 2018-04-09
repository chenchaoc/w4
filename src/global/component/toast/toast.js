/*
* @Author: chenchao
* @Date: 2018-04-09 18:36:27
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-09 20:43:16
*/
import './toast.scss';
import PropTypes from 'prop-types'
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        content: PropTypes.string,
        type: PropTypes.oneOf(['info', 'success', 'warning', 'error'])
    }
    static defaultProps = {
        type: 'success'
    }
    render() {
        let { content, type} = this.props;

        return (
            <div className="toast-box">
                <div className={`toast-wrapper ${type}`}>
                    <p className="toast-content">{content}</p>
                </div>
            </div>
        );
    }
};