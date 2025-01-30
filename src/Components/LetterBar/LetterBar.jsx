

const letter = ['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const LetterBar = () => {
    return (
        <div className={" text-gray-500 p-3 gap-4 flex justify-between border-b-1 border-gray-500 bg-gray-900 overflow-x-scroll" }>
            {letter.map((letter, idx) => (
              <div key={idx}>
                <a href="#">{letter}</a>
              </div>
            ))}
          
          </div>
    );
};



export default LetterBar;