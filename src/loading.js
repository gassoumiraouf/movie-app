import React from 'react';
import Loader from 'react-loader-spinner'

const Loading = Component => {
    return ( function Loading({ loading, ...props }) {
        if (loading) return (<Loader/>);
        return (<Component {...props} />);
      }  );
}
 
export default Loading;