export type VideoBannerProps = {
  videoNumber: number;
}

const VideoBanner = () => {
  return (
    <div className="h-[80vh] w-full max-w-[1440px] flex justify-center z-10">
      <video autoPlay muted loop className="object-cover w-full h-full">
        <source src={`making-soap.webm`} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBanner;
