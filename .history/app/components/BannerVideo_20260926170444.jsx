import liveVideo from "../../public/images/support/bandLive.mp4";

export function Video() {
  return (
    <video
      width="320"
      height="240"
      poster={liveVideo} 
      controls
      preload="none"
    >
      <source src={liveVideo} type="video/mp4" />
      <track
        src={liveVideo} 
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}