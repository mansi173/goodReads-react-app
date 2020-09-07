import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://i0.wp.com/www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/quotesaboutlivingabeautifullife.jpg?fit=1024%2C1024&ssl=1"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Dream as if you’ll live forever, live as if you’ll die today</h2>
                <p>Life’s true gift lies in your freedom to design it beautifully. With each rise of the sun, you get to chase the opportunity to fill your days with meaning—to live your life the way you choose....</p>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts