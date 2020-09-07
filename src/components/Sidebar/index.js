import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import quotePost from '../../data/quote.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = quotePost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjMSUD1HlSTf6Wm-4KqT4gEOW-NGBNnX7L1A&usqp=CAU" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">Good Reads is the quotation site on the web.Our quotations and quote collection have motivated and inspired.
                    It can help in growing person's thoughts.</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.quoteTitle}</h3>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar