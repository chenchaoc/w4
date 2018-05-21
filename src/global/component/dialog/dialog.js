/*
* @Author: chenchao
* @Date: 2018-04-10 16:02:57
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-21 18:27:40
*/
import './dialog.scss';
import PropTypes from 'prop-types';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        showCloseBtn: true,
        closeCb: () => {},
        showConfirmBtn: true,
        confirmText: '确认',
        confirmCb: () => {},
    }
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string.isRequired,
        showCloseBtn: PropTypes.bool,
        closeCb: PropTypes.func,
        showConfirmBtn: PropTypes.bool,
        confirmText: PropTypes.string,
        confirmCb: PropTypes.func,
    }
    componentDidMount() {
        console.log(this.props.confirmCb)
    }
    render() {
        const { width, height, title, content, showCloseBtn, showConfirmBtn, confirmText } = this.props;
        return (
            <div className="dialog-mask" ref="dialog">
                <div className="dialog-wrapper" style={ width || height ? { width: `${width}px`, height: `${height}px`} : null}>
                    { title ? <div className="dialog-title">{ title }</div> : null}
                    { content ? <div className="dialog-content">{ content }</div> : null}
                    { showConfirmBtn ? <div className="dialog-btn color-ff" onClick={ () => this.props.confirmCb() }>{confirmText}</div> : null }
                    { showCloseBtn ? <i className="iconfont if-delete" onClick={ () => this.props.closeCb() }></i> : null }
                </div>
            </div>
        )
    }
}