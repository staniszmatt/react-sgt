/**
 * 
 * @param {Number} length - Enter a number for the length, default is 8. 
 */
// export function randomString(length = 8){ //Default param so if nothing is passed then it will be 8. 
//    const characters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*()";
//    let output = "";
//    for(let charIndex = 0; charIndex < length; charIndex++){
//       const randomIndex = Math.floor(Math.random()*characters.length);
//       output += characters[randomIndex];
//    }
//    return output;
// }

/**
 * @export
 * @param  {Object} data - Pass in student object to convert into a string query 
 * @return {String} urlParams string that can be read by the server
 * @see Apps @function addStudent
 */
export function formatPostData(data){
   // urlParams  builds a query string
   const urlParams = new URLSearchParams();
   //For in loop to go through eac object pairs in array. 
   //.entries takes key value pairs and puts it as mini arrays!
   for(let [key, value] of Object.entries(data)){ 
      urlParams.append(key, value);
   }

   return urlParams;
}