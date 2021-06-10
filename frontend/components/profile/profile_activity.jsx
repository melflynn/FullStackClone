import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../activity/posts/post_item';

const ProfileActivity = (props) => {
  return <section className="activity">
    <h3>Activity</h3>
    <PostItem user={props.user} post={props.post}/>
    <footer>
      <Link to={`/users/${props.userId}/activity`}>See all activity</Link>
    </footer>
  </section>
}

export default ProfileActivity;