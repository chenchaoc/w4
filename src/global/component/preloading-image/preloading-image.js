/*
* @Author: chenchao
* @Date: 2018-08-15 17:18:05
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-15 18:30:37
*/

import './preloadimg-image.scss';
import PropTypes from 'prop-types';

const defaultHolder = 'https://dummyimage.com/200x200/c0b5c5/FFF&text=image~error';

/**
 * 计算cover相对位置
 */
function coverResize(height, width, parentH, parentW) {
  const pK = parentH / parentW; // 父斜率
  const iK = height / width; // 子斜率
  const offset = pK - iK; // 斜率差

  return offset <= 0
    ? {
        width: "100%",
        height: "auto",
        marginTop: parentW * (pK - iK) / 2 + "px"
      }
    : {
        width: "auto",
        height: "100%",
        marginLeft: (parentW - parentH / height * width) / 2 + "px"
      };
}

export default class extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired, // 真实路径
    placeHolder: PropTypes.string, // 占位图路径
    fitModel: PropTypes.oneOf(["cover"]) // 填充模式
  };

  static defaultProps = {
    placeHolder: defaultHolder, // 默认占位图
    fitModel: 'cover'
  };

  constructor(props, context) {
    super(props, context);
    const { placeHolder } = this.props;
    this.state = {
      imgPath: placeHolder, // 渲染图片的src
      resizeStyle: null // 定位style
    };
  }

  /**
   * 根据fitModel获取定位style
   * @param {Number} height 
   * @param {Number} width 
   */
  getResizeStyle(height, width) {
    const { imgDom } = this;
    const { fitModel } = this.props;
    if (!fitModel) return null; // 不需要计算大小

    const $parent = imgDom.parentNode;
    if (!$parent) return null; // 找不到父元素

    const parentW = $parent.offsetWidth;
    const parentH = $parent.offsetHeight;
    if (!(parentW && parentH)) return null; // 父元素无确定的宽高
    if (fitModel === "cover")
      return coverResize(height, width, parentH, parentW);

    return null;
  }

  /**
   * 预加载并定位图片
   * @param {String} imgPath
   * @return {Promise} 
   */
  changeSrc(imgPath) {
    if (!imgPath) return Promise.reject();
    const self = this;
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = e => reject(e);
      img.src = imgPath;
    }).then(function(img) {
      return new Promise((resolve, reject) => {
        const resizeStyle = self.getResizeStyle(img.height, img.width);
        self.setState({ imgPath, resizeStyle }, resolve);
      });
    });
  }

  /**
   * @return {Object} props
   */
  combinDomProps() {
    const {
      props: { placeHolder, fitModel, style, ...domProps },
      state: { imgPath: src, resizeStyle }
    } = this;

    return { ...domProps, src, style: { ...style, ...resizeStyle } };
  }

  componentDidMount() {
    // 预加载并替换真实图片
    this.changeSrc(this.props.src).catch(()=>{});
  }

  componentWillReceiveProps(nextProps) {
    const self = this;
    if (nextProps.src !== this.props.src) {
      // 预加载并替换新src
      self.changeSrc(nextProps.src).catch(err =>
        // 加载失败返回默认图，并删除之前的定位样式
        self.setState({ imgPath: nextProps.placeHolder, resizeStyle: null })
      );
    }
  }

  render() {
    return <img className="pre-img" {...this.combinDomProps()} ref={d => (this.imgDom = d)} />;
  }
}
