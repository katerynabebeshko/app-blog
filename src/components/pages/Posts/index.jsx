/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Nav from "./components/Nav";
import PostForm from "./components/PostForm";
import {
  fetchCreatePostAction,
  fetchListPostsAction,
  fetchRemovePostsAction,
  fetchEditPostAction,
  initialPostAction
} from "./redux/actions";
import { dispatch } from "rxjs/internal/observable/range";

const Posts = props => {
  const { post, posts, isShowForm, fetchListPosts } = props;

  useEffect(() => {
    fetchListPosts();
  }, []);

  const removePost = () => null;
  const showEditForm = () => null;
  const showForm = () => null;
  const editPost = () => null;
  const createPost = () => null;
  const hideForm = () => null;

  return (
    <>
      <Nav showForm={showForm} />
      <List posts={posts} removePost={removePost} showEditForm={showEditForm} />
      <PostForm
        post={post}
        onSubmitEdit={editPost}
        onSubmitCreate={createPost}
        hide={hideForm}
        isShow={isShowForm}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    post: state.posts.post,
    posts: state.posts.dataPosts,
    isShowForm: state.posts.isShowForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListPosts: () => fetchListPostsAction(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
