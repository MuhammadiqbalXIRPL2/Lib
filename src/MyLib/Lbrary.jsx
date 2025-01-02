import BookList from "./component/BookList";
import ImageSlide from "./component/ImageSlide";

function Library() {
  return (
    <div>
      <div className="bg-gray-400 p-10">
        <div className="w-full h-64 mb-10 position: static">
          <ImageSlide />
        </div>
      </div>
      <div className="position: absolute">
        <BookList />
      </div>
    </div>
  );
}

export default Library;
