export default function Affiliations({ affiliations }) {
  return (
    <div className="mb-12">
      <p className="text-center text-lg">Current & Past Affiliations</p>
      <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 mt-4 rounded-lg overflow-hidden">
        {affiliations.map((affiliation) => (
          <div
            className="col-span-1 flex justify-center py-6 px-6 bg-white grayscale"
            key={affiliation._id}
          >
            <img
              className="max-h-20"
              src={affiliation.imageUrl}
              alt={affiliation.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
