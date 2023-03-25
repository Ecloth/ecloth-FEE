import styled from "styled-components";
import ItemUser from "../feed/ItemUser";
import FollowButtonList from "../myPage/FollowButtonList";
import CommentList, {dummyCommentList} from "./CommentList";
import CommentInput from "./CommentInput";
import LikeViews from "./LikeViews";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import {useParams} from "react-router-dom";
import {dummy} from "../feed/FeedBody";
import {useEffect, useState} from "react";

<<<<<<< Updated upstream
export const LOGIN_ID = "test123";
=======
export const LOGIN_ID = 1;
>>>>>>> Stashed changes

function Detail() {
  const {id} = useParams();
  const item = dummy[parseInt(id as string, 10) - 1];
  const [isLogin, setIsLogin] = useState(item.member_id === LOGIN_ID);

  console.log(id, dummy[parseInt(id as string, 10) - 1]);

  // comment -------------------
  const [commentList, setCommentList] = useState(
    dummyCommentList.filter(comment => parseInt(id as string, 10) === comment.post_id),
  );
  // useEffect(() => {}, [commentList]);
  return (
    <DetailWrapper>
      <PostImage imgs={item.images} />
      <ContentWrapper>
        <UserWrapper>
          <ItemUser id={item.member_id} img="" />
<<<<<<< Updated upstream
          {isLogin ? <div>option</div> : <FollowButtonList following={true} />}
=======
<<<<<<< Updated upstream
          {isLogin ? <DetailOption postId ={item.post_id} />: <FollowButtonList following={true} />}
>>>>>>> Stashed changes
        </UserWrapper>
        <PostContent title={item.title} text={item.content} />
=======
          {isLogin ? <DetailOption postId ={item.post_id} />: <FollowButtonList following={true} memberId={item.member_id}/>}
        </UserWrapper>
        <PostContent title={item.title} text={item.content} date={item.create_date}/>
>>>>>>> Stashed changes
        <CommentList commentList={commentList} />

        <LikeViews likes={item.like} views={item.view} />
        <CommentInput />
      </ContentWrapper>
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  & span:first-child {
    display: block;
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin-left: 13px;
    font-weight: 800;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 12%;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & div {
    width: 80px;
    height: 30px;
  }
`;
