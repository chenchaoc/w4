/*
* @Author: chenchao
* @Date: 2018-04-23 18:32:05
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-24 17:20:26
*/
import PropTypes from 'prop-types';
import './list.scss';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        imgUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        creatTime: PropTypes.string.isRequired,
        itemId: PropTypes.string.isRequired
    }
    componentDidMount() {
        //console.log(this.props)
    }
    render() {
        const { imgUrl, title, content, creatTime, itemId } = this.props;
        return (
            <a href={`/home/item/${itemId}`}>
                <div className="list-item">
                    <img className="item-img" src={imgUrl} alt=""/>
                    <div className="item-r">
                        <div className="item-title">{title}</div>
                        <div className="item-content">{content}</div>
                        <div className="item-time">创建时间：{creatTime}</div>
                    </div>
                </div>
            </a>
        )
    }
}