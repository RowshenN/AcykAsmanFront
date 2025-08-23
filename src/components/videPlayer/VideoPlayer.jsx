import mux from 'mux-embed'
import { useEffect, useRef } from 'react'

export default function VideoPlayer({ src }) {
	const videoRef = useRef(null)

	useEffect(() => {
		if (videoRef.current) {
			const initTime = Date.now()
			mux.monitor(videoRef.current, {
				debug: true,
				data: {
					env_key: 'ENV_KEY',
					player_name: 'Main Player',
					player_init_time: initTime,
				},
			})
		}
	}, [videoRef])

	return (
		<video
			controls
			ref={videoRef}
			src={src}
			className='w-full h-full max-h-[90vh] rounded-[20px] '
		/>
	)
}
