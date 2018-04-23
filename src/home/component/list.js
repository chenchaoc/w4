/*
* @Author: chenchao
* @Date: 2018-04-23 18:32:05
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-23 18:57:18
*/
import PropTypes from 'prop-types';
import './list.scss';

export default class extends React.Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        imgUrl: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        creatTime: PropTypes.string
    }
    render() {
        const { imgUrl, title, content, creatTime } = this.props;
        return (
            <div className="list-item">
                <img className="item-img" src={imgUrl} alt=""/>
                <div className="item-r">
                    <div className="item-title">{title}</div>
                    <div className="item-content">{content}</div>
                    <div className="item-time">{creatTime}</div>
                </div>
            </div>
        )
    }
}