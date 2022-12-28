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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((p) => (p + 1) % testimonials.length)
      videoRef.current?.load();
      videoRef.current?.play();
    }, 5000);

    return () => { clearInterval(timer) }
  }, []);

  useEffect(() => {
    console.log(testimonialIndex)
  }, [testimonialIndex])

  return (
    <div className="h-[80vh] w-full flex justify-center z-10">
      <video ref={videoRef} autoPlay muted loop className="object-cover w-full h-full">
        <source src={`making-soap-raw${testimonialIndex+2}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
