import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {
    switch (action.type){
        case 'fetch-user-profile':
            console.log('in fetch-user-profile', profileJson, action.profile);
            return (action.profile);
            // eslint-disable-next-line no-unreachable
            break;
        case 'update-user-profile':
            console.log('in update-user-profile', profileJson, action.profile);
            // state[0] = action.profile;
            // console.log(state)
            return (state);
            // eslint-disable-next-line no-unreachable
            break;
        case 'update-profile':
            return (state);
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return(state);
    }
};

export default profile;