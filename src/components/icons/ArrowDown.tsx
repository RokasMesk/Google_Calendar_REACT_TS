interface ArrowDownProps {
  width: number;
  height: number;
}

export const ArrowDown = ({ width, height }: ArrowDownProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
        fill="#000000"
      />
    </svg>
  );
};
