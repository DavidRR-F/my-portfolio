import FadeIn from "animation/FadeIn";

interface HeaderCardProps {
  index: number;
  image: string;
  header: string;
  headerDesc: string;
  subHeader: string;
  subHeaderDesc: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  index,
  image,
  header,
  headerDesc,
  subHeader,
  subHeaderDesc,
}) => {
  return (
    <FadeIn direction="down" delay={index / 10 + 0.5}>
      <div className="font-open-sans flex flex-wrap justify-center items-center gap-5 mb-12 w-fit h-auto rounded-full border border-solid border-primary-100 border-opacity-10 shadow-lg shadow-black">
        <div className="flex justify-center items-center h-[74px] w-[74px] rounded-full bg-gradient-to-r from-secondary-100 to-secondary-200 shadow-lg shadow-black">
          <img className="w-[70%] h-[70%]" src={image} alt="" />
        </div>
        <div className="h-[60px] w-[286px] m-1 overflow-hidden relative">
          <div className="flex flex-col gap-1 justify-center items-start h-14 absolute">
            <h3 className="font-semibold text-lg">{header}</h3>
            <p>{headerDesc}</p>
          </div>
          {/* <div>
            <h3>{subHeader}</h3>
            <p>{subHeaderDesc}</p>
            </div> */}
        </div>
      </div>
    </FadeIn>
  );
};

export default HeaderCard;
