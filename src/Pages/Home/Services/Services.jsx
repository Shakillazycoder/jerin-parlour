import Button from "../../../Hooks/Button";
import serviceImg1 from "../../../assets/icons/serviceimg1.png";
import serviceImg2 from "../../../assets/icons/serviceimg2.png";
import serviceImg3 from "../../../assets/icons/serviceimg3.png";

const Services = () => {
  return (
    <div className="my-32">
      <div>
        <h2 className="text-3xl text-center mb-16 font-bold text-[#111430]">
          Our Awesome <span className="text-[#F63E7B]">Services</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-4">
        {/* card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <img
              src={serviceImg1}
              alt="Anti Age Face Treatment"
              className="rounded-xl w-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Anti Age Face Treatment</h2>
            <p>$199</p>
            <p className="text-base mt-4">
              Rejuvenate your skin with our premium Anti-Age Face Treatment. Our
              expert aestheticians use advanced techniques and high-quality
              products to reduce the signs of aging and give you a youthful
              glow.
            </p>
            <div className="card-actions">
              <Button label={"Add to Cart"} />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <img
              src={serviceImg2}
              alt="Hair Color & Styleing"
              className="rounded-xl w-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Skin Care Treatment</h2>
            <p>$99</p>
            <p className="text-base mt-4">
              Pamper your skin with our luxurious Skin Care Treatment. Our
              skilled professionals use the finest products to cleanse,
              exfoliate, and nourish your skin, leaving it radiant and
              rejuvenated.
            </p>
            <div className="card-actions">
              <Button label={"Add to Cart"} />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition">
          <figure className="px-10 pt-10">
            <img
              src={serviceImg3}
              alt="Skin Care Treatment"
              className="rounded-x w-16"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Skin Care Treatment</h2>
            <p>$299</p>
            <p className="text-base mt-4">
              Indulge in our premium Skin Care Treatment. Our experienced
              professionals use advanced techniques and high-quality products to
              cleanse, exfoliate, and rejuvenate your skin, leaving it glowing
              and refreshed.
            </p>
            <div className="card-actions">
              <Button label={"Add to Cart"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
