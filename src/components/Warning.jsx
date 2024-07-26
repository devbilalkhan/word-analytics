export default function Warning({ message }) {
  return (
    <p className="px-6 text-red-500 absolute bottom-1">
      <small>{message}</small>
    </p>
  );
}
