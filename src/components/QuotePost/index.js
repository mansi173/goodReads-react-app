import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import quotePost from '../../data/quote.json';

/**
* @author
* @function QuotePost
**/

const QuotePost = (props) => {

    const [post, setPost] = useState({
        id: "" ,
        quoteCategory: "" ,
        quoteTitle : "" ,
        quoteImage: "" ,
        quoteText: ""
    });
    const [slug, setSlug] = useState('');
    
    
    useEffect(() => {
        const slug = props.match.params.slug;
        const post = quotePost.data.find(post => post.slug === slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if(post.quoteImage === "") return null;

  return(
        <div className="quotePostContainer">
            <Card>
                <div className="quoteHeader">
                    <span className="quoteCategory">{post.quoteCategory}</span>
                    <h1 className="postTitle">{post.quoteTitle}</h1>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../goodReadsPostImages/' + post.quoteImage)} alt="" />
                    
                </div>

                <div className="postContent">
                    <h3>{post.quoteTitle}</h3>
                    <p>{post.quoteText}</p>
                </div>
                
            </Card>
        </div>
    )
}

export default QuotePost