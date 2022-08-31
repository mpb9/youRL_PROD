import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Post.css';
import '../pages/Profile.css'

const PATH = "https://localhost/mediashared/src/user-apis/publicprofile.php";
const FOLLOW = "https://localhost/mediashared/src/user-apis/follows.php";
const ALTFOLLOW = "https://localhost/mediashared/src/user-apis/alterfollow.php";
const LIKE = "https://localhost/mediashared/src/post-apis/like.php";
const COMMENT = "https://localhost/mediashared/src/post-apis/comment.php";
const NEWCOMMENT = "https://localhost/mediashared/src/post-apis/addcomment.php";

function ShowPost({id, viewer, poster, title, url, img, likes, comments, caption, date}) {
  
  const [posterProfile, setPosterProfile] = useState({
    user: viewer,
    name: poster,
    postid: id,
    show: false,
    follows: 'follow',
    showComments: false,
    commentPage: [],
    likeCount: likes,
    comCount: comments,
    newComment: '',
    proPic: '',
    data: []
  });

  useEffect(() => {
  }, [posterProfile.likeCount, posterProfile.comCount]);

  const getProfile = (event) => {
    event.preventDefault();
    /* axios({
      method: "post",
      url: `${PATH}`,
      headers: { "content-type": "application/json" },
      data: posterProfile
    })
    .then((result) => {
      setPosterProfile(values => ({...values, data: result.data}));
      setPosterProfile(values => ({...values, show: true}));
      const temp = "https://localhost/mediashared/src/user-apis/" + result.data.proimg;
      setPosterProfile(values => ({...values, proPic: temp}));

      axios({
        method: "post",
        url: `${FOLLOW}`,
        headers: { "content-type": "application/json" },
        data: posterProfile
      })
      .then((result) => {
        setPosterProfile(values => ({...values, follows: result.data}));
      })
      .catch((error) => {
        console.log(error);
      });

    })
    .catch((error) => {
      console.log(error);
    }); */
  }

  

  const likeHandler = (event) => {
    event.preventDefault();
    /*
    axios({
      method: "post",
      url: `${LIKE}`,
      headers: { "content-type": "application/json" },
      data: posterProfile
    })
    .then((result) => {
      if(result.data) {
        const liked = parseInt(posterProfile.likeCount)+1;
        setPosterProfile(values => ({...values, likeCount: liked}));
      } else {
        const liked = parseInt(posterProfile.likeCount)-1;
        setPosterProfile(values => ({...values, likeCount: liked}));
      }
    })
    .catch((error) => {
      console.log(error);
    });*/
  }
  
  const commentPage = (event) => {
    event.preventDefault();
    
    /*
    axios({
      method: "post",
      url: `${COMMENT}`,
      headers: { "content-type": "application/json" },
      data: posterProfile
    })
    .then((result) => {
      setPosterProfile(values => ({...values, commentPage: result.data}));
      setPosterProfile(values => ({...values, showComments: true}));
    })
    .catch((error) => {
      console.log(error);
    }); */
  }

  
  
  
    return (
    <Container id='postCont'>     
      <Row id='days'>
          <h6 style={{padding:'0px', marginBottom:'1px', color:'black', fontWeight:'bold'}}>{date}</h6>
        </Row>  
      <Row style={{margin: 'auto'}}>
        <Col xs={5} style={{textAlign: 'center', paddingTop: '5px'}}>
          <img id='postImg' src={img} alt="Couldn't Generate"/>
          <h5 style={{paddingTop:'5px'}}>{title}</h5> 
          <Button id='openlink' onClick={() => window.open(url)}>Open Link</Button> 
        </Col>
        <Col xs={7} style={{ margin: 'auto', textAlign: 'left', paddingTop:'5px'}}>
          <p id='caption'>
            <input type='submit' value={poster} id='userLink' onClick={getProfile}/>
            {caption}
          </p>
          <Button id='link' onClick={likeHandler}>{posterProfile.likeCount} Likes</Button>
          <Button id='link' onClick={commentPage}>{posterProfile.comCount} Comments</Button>
        </Col>
      </Row>
    </Container>
    );
  
}

export default ShowPost;