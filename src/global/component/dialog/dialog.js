/*
* @Author: chenchao
* @Date: 2018-04-10 16:02:57
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 09:57:58
*/
import './dialog.scss';
import protoTypes from 'prop-types';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        //width: 300,
        //height: 200,
        //title: '这是dialog标题',
        //content: '这是dialog正文正文这是dialog正文正文这是dialog正文正文这是dialog正文正文这是dialog正文正文这是dialog正文正文这是dialog正文正文',
        showCloseBtn: true,
        closeCb: () => { console.log('关闭了') },
        showConfirmBtn: true,
        confirmText: '确认',
        confirmCb: () => { console.log('确认了') },
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
                <div className="dialog-wrapper">
                    <div className="dialog-title">{ title }</div>
                    <div className="dialog-content">{ content }</div>
                    { showConfirmBtn ? <div className="dialog-btn color-ff" onClick={ () => this.handleConfirm() }>{confirmText}</div> : null }
                    { showCloseBtn ? <i className="iconfont if-delete" onClick={ () => this.handleClose() }></i> : null }
                </div>
            </div>
        )
    }
}