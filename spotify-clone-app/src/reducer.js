export const initialState ={
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //Remove after finsihed developing...
    //token:"BQBOONJgJjPlnw6zueP12T8xLKxbZ8lI0uRLVChCDSlTxyVfGodJf5W0vQoP6gKl5PbKPy5zZ4l4ebLDx1N_vb6TCPFcLih4opoFzzYOEfF25NlTVUzMFMcJVxXFadecHesTCcVMuAEt7xG5AL0Kcr9qqUSSWUtyDq88adZmxgtHQu9biuOO",
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  