import React from ‘react‘;
import { withRouter } from ‘react-router-dom‘;
import WithRouterSample from ‘./WithRouterSample‘;


(…)



const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      (…)
      <WithRouterSample />
    </div>
  );
};



export default withRouter(Profile);