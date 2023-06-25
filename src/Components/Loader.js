import React from 'react';
import { Triangle } from  'react-loader-spinner';
import "../../src/stylesheets/LoaderStyles.css";

const Loader = () => {
  return (
    <>
    <div className='load-color'>
<Triangle
  height="100"
  width="100"
  color="#FFCB74"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>

    </div>

    </>
  )
}

export default Loader
