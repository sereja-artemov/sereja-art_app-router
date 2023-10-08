import s from './YouTube.module.scss';

interface YouTubeProps {
  id: string,
}

export default function YouTube({ id }:YouTubeProps) {
  return (
    <div className={s.wrapper}>
      <iframe className={s.iframe} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
      </iframe>
    </div>
  );
}
