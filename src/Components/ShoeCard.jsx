const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`boorder-2  rounded-xl ${
        bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer`}
      onClick={{ handleClick }}
    >
      <div>
        <img
          src={imgURL.thumbnail}
          alt="shoeCollection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
