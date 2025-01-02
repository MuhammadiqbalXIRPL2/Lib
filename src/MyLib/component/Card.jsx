import BookList from "./BookList";

const Card = ({ title, author, children}) => {
  return (
    <div className="rounded-lg w-full shadow-lg bg-white p-4">
      <div className="flex justify-center">
        {children}
      </div>
      <div className="mb-4">
        <h1 className="font-semibold mt-5"> {title} </h1>
        <h3 className="text-sm text-emerald-300 "> {author}</h3>
      </div>
    </div>
  );
};

export default Card;
