interface BurgerMenu {
  width: number;
  height: number;
}

export const BurgerMenu = ({ width, height }: BurgerMenu) => {
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
        fillRule="evenodd"
      />
    </svg>
  );
};
