import { Button, Container, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useEffect, useState } from 'react';
import useAuth from "../../../../hooks/useAuth";
import ReviewToken from '../ReviewToken/ReviewToken';

const textFieldStyle = {
    width: "490px",
    padding:"15px",
    fontSize:"18px"
}

const Review = () => {
    const {user} = useAuth();
    const [reviewComment,setReviewComment] = useState("");
    const [reviewValue, setReviewValue] = React.useState(0);
    const [userAllReviews,setUserAllReview] = useState([]);

    // Post a new review 
    const handleReview = e =>{
        const reviewInfo = {
            revValue: reviewValue, 
            revComment: reviewComment,
            revDate: (new Date()).toLocaleDateString(),
            revEmail: user.email,
            revNamer: user.displayName,
            revImg: user.photoURL
        }
        fetch('https://fast-bastion-88806.herokuapp.com/reviews',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Review has been posted successfully!");
                    const newReviewList = [reviewInfo,...userAllReviews]
                    setUserAllReview(newReviewList);
                    e.target.reset();
                    // window.location.reload();
                }
            })
        e.preventDefault();
    }


    const handleReviewRating = (event, newValue) =>{
        return setReviewValue(newValue)
    }
    // load user specifiq reviews 
    useEffect(()=>{
        fetch(`https://fast-bastion-88806.herokuapp.com/reviews/userReview?reviewerEmail=${user.email}`)
            .then(res=>res.json())
            .then(data=>setUserAllReview(data.reverse()))
    },[user.email])

    const handleReviewDelete = (id) =>{
        const confirm = window.confirm("Are you sure to delete this review?");
        if (confirm) {
            fetch(`https://fast-bastion-88806.herokuapp.com/reviews/${id}`,{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(data=>{
                    if (data.deletedCount > 0) {
                        alert("Review Deleted Successfully.");
                        const remainingReviews = userAllReviews.filter(review=>review._id !== id)
                        setUserAllReview(remainingReviews);
                        setReviewValue(0);
                    }
                })
        }
    }

    return (
        <Box>
            <Box sx={{p:2, display:"flex", flexDirection:"column",alignItems:"center"}}>
                <Typography variant="h4" component="div">Add a Review</Typography>
                <Typography variant="body1" color="red" component="div">
                    Remember: With you review, your name and profile picture will be shown on public. 
                </Typography>
                <Box  sx={{mt:3, width:"fit-content"}}>
                    <form style={{display:"flex", flexDirection: 'column', alignItems:"center", textAlign:"center"}} onSubmit={handleReview}> 
                        <Box ><TextareaAutosize onBlur={(e)=>setReviewComment(e.target.value)} aria-label="minimum height" name="reviewComment" minRows={5} placeholder="Write you review here" style={textFieldStyle}/></Box>
                        <Box  sx={{m:1}}>
                            <Typography component="legend">Review point: {reviewValue}</Typography>
                            <Rating onChange={handleReviewRating} precision={0.2}  name="simple-controlled" value={reviewValue} />
                        </Box>
                        <Button sx={{m:1}} type="submit" variant="contained">Post Review</Button>
                    </form>
                </Box>
            </Box>
            <Container>
                {
                    userAllReviews.map(review => <ReviewToken  review={review} handleReviewDelete={handleReviewDelete} key={review._id}></ReviewToken>)
                }
            </Container>
        </Box>
    );
};

export default Review;