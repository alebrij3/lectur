import BookRow from './bookRow';

export default function BookShelf({ qty, scale }) {
  return (
    <div>
      <BookRow qty={qty} scale={scale} />
      <BookRow qty={qty} scale={scale} />
      <BookRow qty={qty} scale={scale} />
    </div>
  );
}
