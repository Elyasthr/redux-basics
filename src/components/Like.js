import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../store/action/post.action";
import { addUserLike } from "../store/action/user.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer)
  console.log("val du user")
  console.log(user)
  const dispatch = useDispatch()
  const handleLike = () => {
    const postData = {
      title: post.title,
      auhtor: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post.id
    };

    const userData = {

      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id
    };

    dispatch(addLike(postData))
    dispatch(addUserLike(userData))
  }
  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
