/** Prefix a public-folder path with the configured base (works for "/" and "/Repo"). */
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
