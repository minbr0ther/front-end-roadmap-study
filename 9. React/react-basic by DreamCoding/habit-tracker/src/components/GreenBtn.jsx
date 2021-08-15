export default function GreenBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-2xl text-white p-1 m-1"
    >
      {children}
    </button>
  );
}
