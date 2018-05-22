/*
* @Author: chenchao
* @Date: 2018-04-20 17:48:59
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-22 17:37:52
*/
import './fe-dev.scss';
import dialog from '@globalcomponent/dialog/index.js';
import toast from '@globalcomponent/toast/index.js';
import Switch from '@globalcomponent/switch/switch.js';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true
        }
    }
    handleClick() {
        dialog({
            title: '这是一个dialog',
            content: '对不起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵',
            //showCancelBtn: false
            
        }).then(() => {
            //console.log('点击确认')
            toast('确认')
        }).catch(() => {
            //console.log('点击关闭')
            toast('取消')
        })
    }    
    handleToast() {
        toast('1233333333')
    }
    render() {
        const { checked } = this.state
        return (
            <div className="app-fe">
                前端开发页面
                <div onClick={ () => this.handleClick()}>弹出dialog</div>
                <div onClick={ () => this.handleToast()}>弹出toast</div>
                <div>
                    <Switch checked={checked} onChange={(value) => this.setState({checked: value})}></Switch>
                    <span>switch是否选中：{`${checked}`}</span>                    
                </div>
            </div>
        )
    }
}