import { FC, useEffect, useState } from 'react';
import {
  Card as MuiCard,
  CardProps,
  CardMedia,
  CardContent,
} from '@mui/material';
import { notFound } from 'images';

interface ICard extends CardProps {
  imgUrl?: string;
  mediaHeight?: string;
  cardContent?: React.ReactNode;
}

export const Card: FC<ICard> = ({
  imgUrl,
  title,
  mediaHeight = 140,
  cardContent,
  sx,
}) => {
  const [imageSrc, setImageSrc] = useState(imgUrl);

  const handleImageSrcError = () => {
    setImageSrc(notFound);
  };

  useEffect(() => {
    setImageSrc(imgUrl);
  }, [imgUrl]);

  return (
    <MuiCard sx={sx}>
      <CardMedia
        sx={{ height: mediaHeight }}
        src={notFound}
        image={imageSrc}
        component='img'
        alt={title}
        onError={handleImageSrcError}
      />
      <CardContent sx={{ '&.MuiCardContent-root': { p: 2 } }}>
        {cardContent}
      </CardContent>
    </MuiCard>
  );
};
