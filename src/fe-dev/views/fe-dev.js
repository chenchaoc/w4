/*
* @Author: chenchao
* @Date: 2018-04-20 17:48:59
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-06-22 11:28:36
*/
import './fe-dev.scss';
import dialog from '@globalcomponent/dialog/index.js';
import toast from '@globalcomponent/toast/index.js';
import Switch from '@globalcomponent/switch/switch.js';

console.log(utils.jsEncrypt('jdjdjdskskslslss'));
console.log(utils.jsDecrypt('CBSQmyk5oieHpb64FmKidAMZKk8CKLzNTinweCyN5Xg3jFLmgm+WnuFh1UU0L88x08GQDm6+vkX6qiAmtmuoh3wQR9pyNSY9TJiXwRZqevZAHEM38iEZLLa71dhF2hJE8oPck5e8XLDEW+HCDUayJjJNCMGd8xr77tTpa/9LrdM='))

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true
        }
    }
    componentDidMount() {
        let arr = [1,2,3,4,5,15,9,11,6,51,22]
        let na = arr.filter((v) => {
            return v < 8
        })
        console.log(na)
        let a = 0
        for ( let i=0; i<=na.length -1; i++) {
            for( let k=i+1; k<= na.length -1; k++){
                a++
                if(na[i] + na[k] == 8){
                    console.log('数字：', na[i], '位置：', arr.findIndex((v) => v == na[i]), '数字：', na[k], '位置：', arr.findIndex((v) => v == na[k]))
                    console.log('循环了',a,'次')
                    return false;
                }
            }
        }
    }
    handleClick() {
        dialog({
            title: '这是一个dialog',
            content: '对不起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵起啦，真的，呵呵呵',
            //showCancelBtn: false,
            cancelText: '不取消',
            confirmText: '不确认'
            
        }).then(() => {
            //console.log('点击确认')
            toast('确认')
        }).catch(() => {
            //console.log('点击关闭')
            toast('取消')
        })
    }    
    handleToast() {
        toast('我就是toast一下下而已，别激动')
    }
    render() {
        const { checked } = this.state
        return (
            <div className="app-fe">
                前端开发页面
                <div onClick={ () => this.handleClick()}>弹出dialog</div>
                <div onClick={ () => this.handleToast()}>弹出toast</div>
                <div>
                    <Switch checked={checked} onChange={ (value) => {this.setState({ checked: value})}}></Switch>
                    <span>switch是否选中：{`${checked}`}</span>
                </div>
            </div>
        )
    }
}