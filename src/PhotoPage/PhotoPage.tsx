import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {PhotoContext} from '../Context/PhotoContext'
import { Avatar, Card, CardContent, CardHeader, CardMedia } from '@mui/material';

const PhotoPage: React.FC = () => {

    const { id } = useParams(); // Get the parameter value from the URL
    const {photos} = useContext(PhotoContext);

    const photo = photos.find(p => p.id === Number(id));

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div style={{backgroundColor: 'rgb(230,230,230)', minHeight: "100vh", padding: '4%'}}>
    <Card style={{padding: '4%'}}>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe">
                    <img
                        src={photo.userImageURL}
                        loading="lazy"
                        style={{width: '100%'}}
                        alt={photo.user + " profile"}
                    />
                </Avatar>
            }
          title={photo.user}
        />
        <CardMedia>
            <img
                src={photo.webformatURL}
                loading="lazy"
                style={{ width: '100%', padding: "1% 0% 1% 0%",}}
                alt={photo.tags}
            />
        </CardMedia>
        <CardContent>
            <div>
                Tags: {photo.tags}
            </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default PhotoPage;