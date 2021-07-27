export const isSpaceKey = (e) => {
 if(e.key === ' ') {
     e.preventDefault();
     return true;
 }
}

export const isEnterKey = (e) => { return e.key === 'Enter' };

export const isAllowedKeyPress = (e) => { return isSpaceKey(e) || isEnterKey(e) }