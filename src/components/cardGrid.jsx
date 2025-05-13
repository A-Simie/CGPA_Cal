/* eslint-disable react/prop-types */

const Card = ({ number, description }) => {
  // Split the description into lines for proper formatting
  const words = description.split(" ");
  const firstLine = words[0];
  const restLines = words.length > 1 ? words.slice(1).join(" ") : "";

  return (
    <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-between w-full">
      <div className="flex items-center space-x-4">
        <span className="text-4xl md:text-5xl font-black text-gray-900">
          {number}
        </span>
        <div className="flex flex-col items-start text-left">
          <span className="text-[#00ADB5] text-sm md:text-base">
            {firstLine}
          </span>
          {restLines && (
            <span className="text-[#00ADB5] text-sm md:text-base">
              {restLines}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const CardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <Card key={index} number={card.number} description={card.description} />
      ))}
    </div>
  );
};

export default CardGrid;
