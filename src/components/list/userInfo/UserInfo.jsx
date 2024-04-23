import React, { useEffect } from 'react'
import './UserInfo.css'
import { useUserStore } from '../../../lib/userStore'
function UserInfo() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore()

  return (
    <div className='userinfo'>
      <div className="user">
        <img src={currentUser.avatar ||"./avatar.png"} alt="" />
        <p>{ currentUser.username}</p>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default UserInfo