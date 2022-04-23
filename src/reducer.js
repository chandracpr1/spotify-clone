/* eslint-disable default-case */
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQBXPuopVcScm13uD37jx6cxrcDe1raKXMdiRg8ZoPfch-UlYy4j3fQrFWbTBm-tB2XTJI0BORh7BeaM3o_z2lbqjDtYQDlclpkD-ZqMzB6fmBz5ojuEKWRigLMD4WCw-AX1Oyx4wRAXQFVQoVwMLF3fFVhr94XKy0zVgrr7B3K5JJN0bc0X",
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            console.log("hello");
            console.log(action.playlists.item);
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_TRACK":
            return {
                ...state,
                track: action.track
            }
        default:

            return state;
    }
}


export default reducer;