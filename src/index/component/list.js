/*
* @Author: chenchao
* @Date: 2018-04-25 10:47:42
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-15 16:31:17
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
        line1: PropTypes.string.isRequired,
        line2: PropTypes.string.isRequired,
        line3: PropTypes.string,
        line4: PropTypes.string,
        creatTime: PropTypes.string.isRequired,
        itemId: PropTypes.string.isRequired
    }
    componentDidMount() {
        //console.log(this.props)
    }
    render() {
        const { imgUrl, title, line1, line2, line3, line4,  creatTime, itemId } = this.props;
        return (
            <a href={`/poetry/info/${itemId}`} target="_blank" className="list-box">
                <div className="list-item">
                    <img className="item-img" src={imgUrl} alt=""/>
                    <div className="item-r">
                        <div className="item-title">{title}</div>
                        <div className="item-content">
                            {line1 && <div>{line1}</div>}
                            {line2 && <div>{line2}</div>}
                            {line3 && <div>{line3}</div>}
                            {line4 && <div>{line4}</div>}
                        </div>
                        <div className="item-time">创建时间：{creatTime}</div>
                    </div>
                </div>
            </a>
        )
    }
}