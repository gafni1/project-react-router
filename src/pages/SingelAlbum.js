import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingelAlbum() {
  const { albumId } = useParams();

  const [album, setAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((response) => response.json())
      .then((json) => setAlbum(json));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);
  console.log(photos);
  return (
    <div>
      <br />
      <h2>album {albumId}</h2>
      <h3 className="album">{album && album.title}</h3>
      {photos && photos.map((x, idx)=><img key={idx} src={x.thumbnailUrl} width="70px" />)}
    <br />
    <Link to={'/dashboard/albums'} className='btn'>back to all albums</Link>
    </div>
  );
}

export default SingelAlbum;
