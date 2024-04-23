import React from 'react'
import './list.css'
import UserInfo from '../list/userInfo/UserInfo'
import ChatList from '../list/ChatList/ChatList'


function List() {
  return (
    <div className='list'>
      <UserInfo />
      <ChatList/>
    </div>
  )
}

export default List