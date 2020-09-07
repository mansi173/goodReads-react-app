import React from 'react';
import './style.css';
import QuotePost from '../../components/QuotePost';
import Layout from '../../components/Layout';

/**
* @author
* @function Post
**/

const Post = (props) => {
return(
        <Layout>
          <QuotePost {...props} />
        </Layout>
   )

}

export default Post;