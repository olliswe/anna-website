const Publications = ({ publications }) => {
  return (
    <div className="bg-gray-200 overflow-hidden shadow sm:rounded-lg py-6">
      <div className="px-4 sm:px-6 text-lg">Publications</div>
      <div className="px-4 pt-5 sm:px-6 text-m">Journal Articles</div>
      <div className="px-4 sm:px-6 pt-2">
        <ul className="space-y-2">
          {publications
            .filter(({ type }) => type === "journal")
            .map((publication, idx) => (
              <li key={`pub-${idx}`}>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {publication.name}
                </a>
                <div className="flex space-x-2">
                  {publication.tags.map((tag, idx) => (
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                      key={`pub-tag-${idx}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="px-4 pt-5 sm:px-6 text-m">Other Publications</div>
      <div className="px-4 sm:px-6 pt-2">
        <ul className="space-y-2">
          {publications
            .filter(({ type }) => type === "other")
            .map((publication, idx) => (
              <li key={`pub-${idx}`}>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {publication.name}
                </a>
                <div className="flex space-x-2">
                  {publication.tags.map((tag, idx) => (
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                      key={`pub-tag-${idx}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Publications;
