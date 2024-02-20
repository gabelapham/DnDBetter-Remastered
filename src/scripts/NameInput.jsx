

function nameInput() {
    let name = prompt("Insert your character's name.")
    if (name == "" || name.length == 0 || name.startsWith(" ")) {
      return("Click to enter name...")
    } else {
      return(name)
    }
  }

  export default nameInput