/*
* @Author: chenchao
* @Date: 2018-04-10 16:02:57
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 12:07:19
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
        content: PropTypes.string,
        showCloseBtn: PropTypes.bool,
        closeCb: PropTypes.func,
        showConfirmBtn: PropTypes.bool,
        confirmText: PropTypes.string,
        confirmCb: PropTypes.func,
    }
    removeDialogDom() {
        return new Promise((resolve, reject) => {
            document.body.removeChild(this.refs.dialog.parentNode)
            resolve()
        })
    }
    handleClose() {
        const { closeCb } = this.props;
        this.removeDialogDom().then(() => {
            closeCb();
        })
    }
    handleConfirm() {
        const { confirmCb } = this.props;
        this.removeDialogDom().then(() => {
            confirmCb();
        })        
    }
    render() {
        const { width, height, title, content, showCloseBtn, showConfirmBtn, confirmText } = this.props;
        return (
            <div className="dialog-mask" ref="dialog">
                <div className="dialog-wrapper" style={ width || height ? { width: `${width}px`, height: `${height}px`} : null}>
                    { title ? <div className="dialog-title">{ title }</div> : null}
                    { content ? <div className="dialog-content">{ content }</div> : null}
                    { showConfirmBtn ? <div className="dialog-btn color-ff" onClick={ () => this.handleConfirm() }>{confirmText}</div> : null }
                    { showCloseBtn ? <i className="iconfont if-delete" onClick={ () => this.handleClose() }></i> : null }
                </div>
            </div>
        )
    }
}