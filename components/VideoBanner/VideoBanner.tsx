import { useEffect, useRef, useState } from "react";

export type Testimonial = {
  text: string;
  person: string;
};

const testimonials: Testimonial[] = [
  {
    text: "FABULOUS! I have itchy dry skin when it gets cold and this actually helps.",
    person: "Jen",
  },
  {
    text: "We absolutely love it. I will definitely be ordering it again.",
    person: "Trent",
  }
];

const VideoBanner = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((p) => {
        console.log(p)
        return (p + 1) % testimonials.length
      })
    }, 5000);

    return () => { clearInterval(timer) }
  }, []);

  return (
    <div className="relative bg-light-black h-[88vh] w-full">
      <video autoPlay muted loop className="object-cover w-full h-full opacity-50">
        <source src="head.mp4" type="video/mp4" />
      </video>
      <div className="absolute flex align-center justify-center top-0 left-0 w-full h-full">
        <div className="absolute bottom-16 w-3/4">
          <h1 className="text-5xl text-white">
            {testimonials[testimonialIndex].text}
          </h1>
          <p className="text-2xl text-white">
            - {testimonials[testimonialIndex].person}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
