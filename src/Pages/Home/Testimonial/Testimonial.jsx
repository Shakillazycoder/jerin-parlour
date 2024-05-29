import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="my-16">
      <div>
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
      </div>
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="bg-base-100 text-gray-950">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-900 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900">
                      AMAZING salon; would so recommend! I had my Great Lengths
                      extensions fitted by Lauren and I cannot believe how
                      incredible my hair looks 🤩 It’s given me so much volume
                      and length, I’m so happy! Maria cut my extensions to blend
                      in with my natural hair and styled them in these gorgeous
                      loose waves. Could not recommend enough - also the most
                      beautiful salon I’ve ever been in too!
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXt5rdspZsmTkRHxGb_8k7V5Cs-qaP3Z1lIvyWhqiFiTdIEjied=w60-h60-p-rp-mo-br100"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900">
                        Sarah Hayden
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bg-base-100 text-gray-950">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-900 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900">
                      I have been a Regular client with SIMONE for over 6 years
                      now and Cannot explain how Happy and satisfied I come out
                      with every hair style he has given me since the first
                      visit. Everytime SIMONE has given me the most Trending and
                      different look which always stands out. Until I live in
                      London SIMONE will always be my hair stylist.😍🤗🤗 Thank
                      you so much SIMONE for the BEST of All.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://lh3.googleusercontent.com/p/AF1QipPYW7V8yBdYPcqZAP4l82cl4FmpAkWrt9Nkz0mu=s125-p-k-rw"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900">
                        Swasticaa
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bg-base-100 text-gray-950">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-900 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900">
                      I recently had a fantastic experience with my new stylist.
                      Simone delivered an excellent haircut that perfectly
                      matched my expectations. The atmosphere during the cut was
                      incredibly welcoming and enjoyable, thanks to Jerin&apos;s
                      professionalism and friendly demeanor. He really listens
                      and skillfully brings your vision to life. The
                      conversation was engaging, making the entire experience a
                      pleasure. I left feeling refreshed and very satisfied with
                      the service. Highly recommend Simone to anyone looking for
                      a skilled and attentive barber!
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://lh3.googleusercontent.com/p/AF1QipN4XPfpZqUTuszpP7Ja2FqLkga8BRp9ewJfYW5l=s125-p-k-rw"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900">
                        Julian
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="bg-base-100 text-gray-950">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-gray-900 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900">
                      Took me years to find someone who did my hair how I like
                      it then I found Emilie who does my balayage and gets it
                      right every time! I get so many compliments on my hair
                      colour - she&apos;s the best!
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjXVxx6ZmztKZwROQW6gcMBl9XDuAnVGpGtii40kLbuAvokYBQM=w60-h60-p-rp-mo-br100"
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900">
                        Amy Salmon
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
