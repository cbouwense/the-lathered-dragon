export type VideoBannerProps = {
  videoNumber: number;
}

const VideoBanner = ({ videoNumber }: VideoBannerProps) => {
  return (
    <div className="h-[80vh] w-full flex justify-center z-10">
      <video autoPlay muted loop className="object-cover w-full h-full">
        <source src={`making-soap-raw${videoNumber}.webm`} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBanner;
