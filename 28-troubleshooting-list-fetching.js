/* 
There's an issue that once we refresh the SongList page then the query runs (all good), but then the list isn't showing completely after being redirected because the query has already run, and doesn't want to run again after being redirected. Only the songs already fetched are rendered. Apollo knows the new song exists, but it doesn't assume that it has to refetch that song. 

WE NEED to tell Apollo to rerun the query whenever a new song is created, and that the new song is something we want to tie to the SongList.

*/