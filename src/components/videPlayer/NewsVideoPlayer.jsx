import mux from "mux-embed";
import { useEffect, useRef } from "react";

export default function NewsVideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const initTime = Date.now();
      mux.monitor(videoRef.current, {
        debug: true,
        data: {
          env_key: "ENV_KEY",
          player_name: "Main Player",
          player_init_time: initTime,
        },
      });
    }
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      src={src}
      className="w-full h-full xs:h-[175px] md:h-[250px] rounded-[20px] "
    />
  );
}
