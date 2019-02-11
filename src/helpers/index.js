/**
 * 
 * @param {Number} length - Enter a number for the length, default is 8. 
 */
export function randomString(length = 8){ //Default param so if nothing is passed then it will be 8. 
   const characters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*()";
   let output = "";
   for(let charIndex = 0; charIndex < length; charIndex++){
      const randomIndex = Math.floor(Math.random()*characters.length);
      output += characters[randomIndex];
   }
   return output;
}