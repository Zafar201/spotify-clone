export const initialState ={
    user:null,
    playelists:[],
    playing:false,
    item:null,
    //Remove after finsihed developing...
    token:"BQBOONJgJjPlnw6zueP12T8xLKxbZ8lI0uRLVChCDSlTxyVfGodJf5W0vQoP6gKl5PbKPy5zZ4l4ebLDx1N_vb6TCPFcLih4opoFzzYOEfF25NlTVUzMFMcJVxXFadecHesTCcVMuAEt7xG5AL0Kcr9qqUSSWUtyDq88adZmxgtHQu9biuOO",
}

const reducer =(state,action) => {
console.log(action)

  switch(action.type){
      case 'SET_USER':
          return{
              ...state,
              user:action.user
          }

          case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
          
           case 'SET_PLAYLISTS':
               return{
                   ...state,
                   playelists:action.playelists
               }
            default:
              return state
  }
}
export default reducer