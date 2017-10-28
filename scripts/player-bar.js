$( document ).ready(function() {
  $('#play-pause').click(function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').click(function(){
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

    if (album.songs[currentSongIndex + 1]){
      const nextSong = album.songs[currentSongIndex + 1];
      player.playPause(nextSong);
    }
  });

  $('button#previous').click(function(){
    if (player.playState !== 'playing'){ return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);

    if (album.songs[currentSongIndex - 1]) {
        const previousSong = album.songs[currentSongIndex - 1];
        player.playPause(previousSong);
    }
  });
});
