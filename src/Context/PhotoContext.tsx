import React, { ReactNode, createContext, useState } from 'react';
import { PixabayImage } from '../Types/PhotoTypes';

interface PhotoContextProps {
    photos: PixabayImage[];
    setPhotos: React.Dispatch<React.SetStateAction<PixabayImage[]>>;
  }
  
export const PhotoContext = createContext<PhotoContextProps>({
  photos: [],
  setPhotos: () => {},
});

interface PhotoContextProviderProps {
    children: ReactNode; // Define children prop type
  }

export const PhotoContextProvider: React.FC<PhotoContextProviderProps> = ({ children }) => {
    const [photos, setPhotos] = useState<PixabayImage[]>([]);

  return (
    <PhotoContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};
