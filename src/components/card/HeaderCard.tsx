interface HeaderCardProps {
  image: string;
  header: string;
  headerDesc: string;
  subHeader: string;
  subHeaderDesc: string;
}

const HeaderCard: React.FC<HeaderCardProps> = ({
  image,
  header,
  headerDesc,
  subHeader,
  subHeaderDesc,
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mb-16 max-w-[90%] w-[1300px] h-auto">
      <div className="flex justify-center items-center h-[74px] w-[74px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
        <img className="w-[55%] h-[55%]" src={image} alt="" />
      </div>
      <div>
        <div>
          <h3>{header}</h3>
          <p>{headerDesc}</p>
        </div>
        <div>
          <h3>{subHeader}</h3>
          <p>{subHeaderDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
