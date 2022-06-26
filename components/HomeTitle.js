const HomeTitle = () => {
  return (
    <div className="flex flex-column items-center justify-between w-full">
      <div>
        <div className="text-3xl">Public Health, Epidemiology, Medicine</div>
        <div className="mt-2">
          <div className="flex items-center">
            <img src="images/linkedin.png" className="h-4 w-4 mr-1" />
            <a
              href="https://www.linkedin.com/in/anna-fr%C3%BChauf-67a9b8123/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Anna Frühauf
            </a>
          </div>
          <div className="mt-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <a
              href="https://www.linkedin.com/in/anna-fr%C3%BChauf-67a9b8123/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="inline-block h-64 w-64 rounded-full"
          src="/images/anna.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeTitle;
