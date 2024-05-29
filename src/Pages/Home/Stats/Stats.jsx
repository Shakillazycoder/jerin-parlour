import customerImg from "../../../assets/images/customer.png";

const Stats = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <img
            src={customerImg}
            className=" md:max-w-xl rounded-lg shadow-2xl"
          />
          <div className="space-y-4">
            <h1 className="text-5xl text-[#2D2D2D] font-bold ">
              Let us handle your <br /> screen{" "}
              <span className="text-[#F63E7B]">Professionally.</span>
            </h1>
            <p className="text-base mt-4">
              Trust our expertise to deliver exceptional results for your skin.
              With our meticulously crafted treatments and top-quality products,
              we ensure your skin receives the care it deserves.
            </p>
            <p className="text-base mt-4">
              Join our community of over 500 satisfied customers who have
              experienced the difference in our services. With over 3 years of
              dedicated service, we are committed to providing excellence in
              skincare.
            </p>
            {/* stats */}
            <div>
              <div className="stats shadow bg-transparent outline-none border-none">
                <div className="stat place-items-center space-y-3">
                  <div className="stat-value  text-[#F63E7B]">500+</div>
                  <div className="stat-title">Happy Customers</div>
                </div>

                <div className="stat place-items-center space-y-3">
                  <div className="stat-value text-[#F63E7B]">3+</div>
                  <div className="stat-title">Total Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
