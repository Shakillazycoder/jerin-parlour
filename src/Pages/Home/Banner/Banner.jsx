import Button from "../../../Hooks/Button";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              BEAUTY SALON <br /> FOR EVERY WOMEN
            </h1>
            <p className="text-base mt-4">
              Discover our wide range of beauty services designed to help you
              look and feel your best. From refreshing facials to stylish
              haircuts, our expert team is here to pamper you.
            </p>
            <Button label={"Get an Appointment"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
