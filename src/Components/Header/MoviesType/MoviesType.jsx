import PropTypes from 'prop-types';

const MoviesType = ({truncateText}) => {
    const Movies=[
        "DC, Marvel or Superhero Movies & TV Series",
        "Oscar Winning Movies",
        "Bollywood Hindi",
        "English (Hollywood)",
        "Tamil",
        "Telugu",
        "Malayalam",
        "Kannada",
        "Korean",
        "Japanese & Chinese",
        "Turkish",
        "Spanish",
        "Dual Audio",
        "Hindi Dubbed",
        "HEVC Collection",
        "Tv & Web Series",
        "TV Show",
        "Others"
    ]
    const Genres=[
        "Anime",
        "Animation & Cartoon Movies",
        "Action",
        "Adventure",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Psychological",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "Sports",
        "War",
        "Western"
    ]
    return (
        <div>
            <div className='p-4 bg-gray-800/30 border-b-1 border-gray-800'>
                <h1 className='text-white pb-2'>Movies</h1>
                <div className="grid grid-cols-2 gap-x-4 text-[13.5px] ">
                    {
                        Movies.map((movie,idx)=>(
                            <div key={idx} className='pt-1 pl-2'>
                                <a className='md:hidden pt-1 pl-2 font-bold' href="/">-  {truncateText(movie,16)}</a>
                                <a className='md:block hidden pt-1 pl-2 font-bold' href="/">-  {movie}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='p-4 bg-gray-800/30 border-b-1 border-gray-800'>
                <h1 className='text-white pb-2'>Genres</h1>
                <div className="grid grid-cols-2 gap-x-4 text-[13.5px] ">
                    {
                        Genres.map((movie,idx)=>(
                            <div key={idx} className='pt-1 pl-2'>
                                <a className=' md:hidden pt-1 pl-2 font-bold' href="/">-  {truncateText(movie,16)}</a>
                                <a className=' md:block hidden pt-1 pl-2 font-bold' href="/">-  {movie}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
MoviesType.propTypes = {
    truncateText: PropTypes.func,
};

export default MoviesType;
