import React from 'react'
import { classPrefix } from 'src/const'
import RenderPager from 'src/components/Layout/RenderPage/RenderPage'

const Cus = (props: any) => {
  console.log(props.route)
  return <RenderPager {...props} className={`${classPrefix}_Cus`} />
}

export default Cus
