/*
* @Author: chenchao
* @Date: 2018-04-09 18:36:27
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 09:58:01
*/
import './toast.scss';
import PropTypes from 'prop-types'
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        text: PropTypes.string, //提示内容
        type: PropTypes.oneOf(['info', 'success', 'warning', 'error']), //类型
    }
    static defaultProps = {
        type: 'warning'
    }
    render() {
        let { text, type} = this.props;

        return (
            <div className="toast-box">
                <div className={`toast-wrapper ${type}`}>
                    <p className="toast-content">{text}</p>
                </div>
            </div>
        );
    }
};