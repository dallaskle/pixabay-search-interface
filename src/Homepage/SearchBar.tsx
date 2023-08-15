import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from '@mui/material/CircularProgress';
import TextField from "@mui/material/TextField";
import { getPhotos } from '../Routes/Pixabay';
import {PhotoContext} from '../Context/PhotoContext'

const SearchBar: React.FC = () => {

    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { setPhotos } = useContext(PhotoContext);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true); // Set loading to true when fetching data

        getPhotos(search).then(res => {
            setPhotos(res?.data?.hits);
            setLoading(false); // Set loading back to false
        }).catch (err => {
            console.error("Error fetching photos:", err);
            setLoading(false); // Set loading back to false
        })
    };

  return (
    <form onSubmit={handleSubmit} style={{textAlign: 'center', }}>
        <TextField
            id="search-bar"
            className="text"
            onInput={handleInput}
            label="Search for images"
            variant="outlined"
            placeholder="Search..."
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            {loading ? (
                <CircularProgress size={24} color="primary" />
            ) : (
                <SearchIcon style={{ fill: "blue" }} />
            )}
        </IconButton>
    </form>
  );
};

export default SearchBar;