// "use client";

import getSongs from "@/actions/getSongs";

const PageContent = async () => {
  const songs = await getSongs();

  return (
    <div>
      {songs.map((song, i) => (
        <div key={i}>{song.title}</div>
      ))}
    </div>
  );
};

export default PageContent;
