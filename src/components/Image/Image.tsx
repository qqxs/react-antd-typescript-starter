import React, { memo, useState } from "react";
import classnames from "classnames";
import defaultImg from "./default.png";

export interface IProps extends React.ImgHTMLAttributes<any> {
  defaultSrc?: string; // 图片默认路径
  [propName: string]: any;
}

const Image = (props: IProps) => {
  const {
    src = "",
    className = "",
    alt = "Image",
    defaultSrc = defaultImg,
    ...other
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imgSrc, setImgSrc] = useState<string>(
    src
      ? /^http[s]?:\/\/|^\/\/|^data:image\/|^\/static\//.test(src)
        ? src
        : `${window["_global"].qiniu_domain}${src}`
      : defaultSrc
  );

  let classNames = classnames("_image", className);

  return (
    <img
      src={imgSrc}
      onError={(e: any) => {
        e.target.setAttribute("src", defaultSrc);
      }}
      alt={alt}
      className={classNames}
      {...other}
    />
  );
};

export default memo(Image);
