import Link from "next/link";

const PortfolioCard = ({ portfolios }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg py-6 px-6">
      <div className="text-lg">Posts</div>
      <ul className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {portfolios.map((portfolio) => (
          <li
            className="col-span-1 bg-white shadow-md border border-gray-200 rounded-lg mb-5 overflow-hidden"
            key={portfolio._id}
          >
            <Link href={`portfolio/${portfolio._id}`}>
              <a>
                <div className="h-48 flex justify-center items-center overflow-hidden">
                  <img className="w-full" src={portfolio.imageUrl} alt="" />
                </div>

                <div className="p-5">
                  <h5 className="text-gray-900 font-bold text-l mb-2">
                    {portfolio.title}
                  </h5>
                  <p className="text-gray-700 mb-3 line-clamp-3">
                    {portfolio.previewText}
                  </p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioCard;
