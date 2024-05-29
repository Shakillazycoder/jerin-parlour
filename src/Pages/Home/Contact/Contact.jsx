const Contact = () => {
  return (
    <div>
      <section className="bg-base-200">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Let us handle your <br /> project, professionally.
          </h2>

          <htmlForm action="#" className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your Number"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-[#F63E7B] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </htmlForm>
        </div>
      </section>
    </div>
  );
};

export default Contact;
