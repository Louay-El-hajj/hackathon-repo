const DisasterCard = ({ disaster }) => {
  const {
    type,
    title,
    date,
    url,
    detailUrl,
    alert,
    tsunami,
    place,
    continent,
    city,
  } = disaster;

  return (
    <div className="p-10 rounded-lg border flex flex-col gap-4">
      <h3>{title}</h3>
      <p>
        {city}, {place} <br />
        <span className="text-gray-400 text-sm">{date}</span>
      </p>
      <a
        href={url}
        target="_blank"
        className="px-4 py-2 rounded-lg text-white bg-blue-950 inline-block mx-auto mt-auto"
      >
        Learn more
      </a>
    </div>
  );
};

export default DisasterCard;
