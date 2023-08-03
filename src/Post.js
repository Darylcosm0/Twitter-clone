import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";



function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
        <Avatar src="https://i.pinimg.com/564x/0f/b4/68/0fb468ed7cdba95c9718ac3a709c97aa.jpg" />
        <div className="post__body">
        <div className="post__header">
        <div className="post__headerText">
            <h3>
            Daryl{""} <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                  {'Cosmo__Daryl'}                </span>
            </h3>
        </div>
        <div className="post__headerDescription">
            <p>F*ck Around And Get Laid! 6ft Deep..</p>
        </div>
        </div>
        <img src="https://i.pinimg.com/236x/67/e6/c7/67e6c796e8f71acc86e2749770454cba.jpg" alt="" />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>

        </div>
            </div>

    </div>
  )
}

export default Post;