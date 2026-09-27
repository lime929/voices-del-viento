import liveVideo from "../../public/images/support/bandLive.mp4";

export function Video() {
  return (
    <video
      width="320"
      height="240"
      poster=""
      controls
      preload="none"
    >
      <source src="/path/to/video.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
}