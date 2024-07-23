interface ArrowLeftProps {
  width: number;
  height: number;
}

export const ArrowLeft = ({ width, height }: ArrowLeftProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      width={width}
      height={height}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
};
