import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlist } from "../../redux/features/wishlist.slice";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import noImage from "../../assets/no-image.png";
import { Empty } from "antd";
import { FaBookmark } from "react-icons/fa6";

const Saved = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto max-w-[1308px] text-black dark:text-white mt-5">
      {wishlist.length === 0 ? (
        <div className="text-center mt-7"><Empty description="No saved movies" className="text-gray-300" /></div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {wishlist.map((movie) => (
            <div key={movie.id} className="relative w-full">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-xl cursor-pointer object-cover object-top"
                  src={movie.poster_path ? import.meta.env.VITE_IMAGE_URL + movie.poster_path : noImage}
                  alt={movie.title}
                />
              </Link>

              <button
                className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2"
                onClick={() => dispatch(removeWishlist(movie.id))}
              >
                <FaBookmark  className="text-red-500" size={18} />
              </button>

              <h2
                title={movie.title}
                className="mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2 cursor-default"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
