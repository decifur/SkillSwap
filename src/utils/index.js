export const getUserTheme = ()=>{
    const theme = localStorage.getItem('applied-theme')
    console.log(theme)
    return theme
}

//picks random values depending on the input
export const pickRandom = (val, roundOff) => {
    switch (typeof (val)) {
      case 'object':
        if (Array.isArray(val)) {
          return val[Math.floor(Math.random() * val.length)]
        } else {
          let keysArr = Object.keys(val)
          let prop = keysArr[Math.floor(Math.random() * keysArr.length)]
          return { [prop]: val[prop] }
        }
      case 'number':
        if (!roundOff) {
          return Math.floor(Math.random() * val)
        } else {
          return Math.random() * val
        }
      case "string":
        return val[Math.floor(Math.random() * val.length)]
  
      default:
        return console.error("Invalid input provided cannot randomize");
    }
  }


  //makes dummy data for testing purposes with array of 10 users
  export const getDummyUsers = ()=>{
    const dummyUsers = [];
    const dummynames = ['onion','potato','cheese','hamster','wolf','user','kenil','lion','monkey']
    const dummyLastnames = ['user','gamer','hacker','pro','danger','logan','kenil','OP','king','queen']
    const dummyUserSkills = [['React','Angular','Vue'],['C++','Java','Express','C#'],['React'],['C++','Java','Express','C#','DSA']]

    for(let i = 1; i < 10 ; i++){
        const user = {
            firstName:pickRandom(dummynames),
            lastName:pickRandom(dummyLastnames),
            imageLink:"/avatar/user"+i+'.png',
            chatLink:true,
            skills:pickRandom(dummyUserSkills)
        }
        dummyUsers.push(user);
    }
    return dummyUsers
  }