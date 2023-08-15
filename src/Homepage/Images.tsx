import React, {useContext, useState, useEffect,} from 'react';
import { useNavigate } from "react-router-dom";
import {PhotoContext} from '../Context/PhotoContext'
import { ImageList, ImageListItem } from '@mui/material'

const Images: React.FC = () => {

    const { photos } = useContext(PhotoContext);
    const navigate = useNavigate();

    const [columns, setColumns] = useState<number>(3); // Default column count

    const handleResize = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 600) {
        setColumns(2); // xs
        } else if (screenWidth >= 600 && screenWidth < 960) {
        setColumns(4); // sm
        } else if (screenWidth >= 960 && screenWidth < 1280) {
        setColumns(6); // md
        } else {
        setColumns(8); // lg and above
        }
    };

    useEffect(() => {
        handleResize(); // Initial column count based on screen size
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = (id: number) => {
        return navigate(`/photo/${id}`);
    }

  return (
    <div style={{padding: '1%'}}>
        <ImageList sx={{ width: '100%' }} cols={columns}>
            {photos.map(p => {
                return (
                    
                    <ImageListItem key={p.id} sx={{ width: '100%' }} onClick={() => {handleClick(p.id)}}>
                        
                        <img
                            src={p.previewURL}
                            loading="lazy"
                            style={{ width: '100%' }}
                            alt={p.tags}
                        />
                        
                    </ImageListItem>
                    
                )
            })}
        </ImageList>
        
        {photos.length === 0 ?  <div style={{color: 'rgb(200,200,200)', textAlign: 'center', width: '100%', paddingTop: '20vh'}}>The world of images is at the tip of your fingers</div> : null}
    </div>
  );
};

export default Images;