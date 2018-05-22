/*
* @Author: chenchao
* @Date: 2018-04-10 16:02:57
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-22 14:53:08
*/
import './dialog.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
        showCancelBtn: true,
        cancelText: '取消',
        cancelCb: () => {},
    }
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string.isRequired,
        showCloseBtn: PropTypes.bool,
        closeCb: PropTypes.func,
        showCcancelBtn: PropTypes.bool,
        showConfirmBtn: PropTypes.bool,
        confirmText: PropTypes.string,
        confirmCb: PropTypes.func,
        cancelText: PropTypes.string,
        cancelCb: PropTypes.func
    }
    componentDidMount() {
        document.querySelector('body').style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.querySelector('body').style = '';
    }
    render() {
        const { width, height, title, content, showCloseBtn, showConfirmBtn, confirmText, showCancelBtn, cancelText } = this.props;
        return (
            <div className="dialog-mask" ref="dialog">
                <div className="dialog-wrapper" style={ width || height ? { width: `${width}px`, height: `${height}px`} : null}>
                    { title ? <div className="dialog-title">{ title }</div> : null}
                    { content ? <div className="dialog-content">{ content }</div> : null}
                    <div className={classnames('btn-wrapper',{
                        'btn-sb': showCancelBtn && showConfirmBtn,
                        'btn-ct': !(showCancelBtn && showConfirmBtn)
                    })}>
                        { showCancelBtn ? <div className="dialog-btn dialog-btn-l color-ff" onClick={ () => this.props.cancelCb() }>{cancelText}</div> : null }
                        { showConfirmBtn ? <div className="dialog-btn dialog-btn-r color-ff" onClick={ () => this.props.confirmCb() }>{confirmText}</div> : null }
                    </div>
                    { showCloseBtn ? <i className="iconfont if-delete" onClick={ () => this.props.closeCb() }></i> : null }
                </div>
            </div>
        )
    }
}