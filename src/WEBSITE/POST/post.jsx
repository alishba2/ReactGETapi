import React from 'react'
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import post from './post.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";


export default function Post() {

  const params = useParams();
  const [Data, setData] = useState();

  const navigate = useNavigate();
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

    const [post , setPost]= useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12 `)
        .then((response)=> response.json()) 
        .then((data)=>{
            console.log(data);
            setPost(data);
            setData(data);
        }).catch((error)=>
        {
            console.log(error);
        })
    },[])
 
 
  return ( 
    <div 
      
      onClick={() => navigate("/user")} 
      className='post'>
        {
      post.map((post)=>{
        return(
      <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
   
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
       
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>

    </Card>
    

  )
      }
)
}
</div>)}
