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

  $('#time-control input').on('input', function(event){
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function(event){
    player.setVolume(event.target.value);
  });

  setInterval(()=> {
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(player.prettyTime(currentTime));
    $('#time-control input').val(percent);
    $('#time-control .total-time').text(player.prettyTime(duration));
  }, 1000);
});
