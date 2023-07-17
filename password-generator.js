const crypto = require('crypto');
function generateRandomPassword(length, characters) {
    characters = characters || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    let password = '';
    const charactersLength = characters.length;  
    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(0, charactersLength);
      password += characters[randomIndex];
    }
  
    return password;
  }
module.exports = generateRandomPassword;