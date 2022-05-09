function solve(input) {
    let race = input[0];
    let sex = input[1];
    
  
    switch (race) {
      case "British Shorthair":
           if(sex === 'm'){
               let humanMonths = 13 * 12;
               let catMonths = humanMonths / 6;
               console.log(`${catMonths} cat months`);
           }else if(sex === 'f'){
            let humanMonths = 14 * 12;
            let catMonths = humanMonths / 6;
            console.log(`${catMonths} cat months`)
           }
        break;
  
      case "Siamese":
        if(sex === 'm'){
            let humanMonths = 15 * 12;
            let catMonths = humanMonths / 6;
            console.log(`${catMonths} cat months`);
        }else if(sex === 'f'){
         let humanMonths = 16 * 12;
         let catMonths = humanMonths / 6;
         console.log(`${catMonths} cat months`)
        }
        break;
      case "Persian":
        if(sex === 'm'){
            let humanMonths = 14 * 12;
            let catMonths = humanMonths / 6;
            console.log(`${catMonths} cat months`);
        }else if(sex === 'f'){
         let humanMonths = 15 * 12;
         let catMonths = humanMonths / 6;
         console.log(`${catMonths} cat months`)
        }
        break;
      case "Ragdoll":
        if(sex === 'm'){
            let humanMonths = 16 * 12;
            let catMonths = humanMonths / 6;
            console.log(`${catMonths} cat months`);
        }else if(sex === 'f'){
         let humanMonths = 17 * 12;
         let catMonths = humanMonths / 6;
         console.log(`${catMonths} cat months`)
        }
        break;
      case "American Shorthair":
        if(sex === 'm'){
            let humanMonths = 12 * 12;
            let catMonths = humanMonths / 6;
            console.log(`${catMonths} cat months`);
        }else if(sex === 'f'){
         let humanMonths = 13 * 12;
         let catMonths = humanMonths / 6;
         console.log(`${catMonths} cat months`)
        }
        break;
      case "Siberian":
        if(sex === 'm'){
            let humanMonths = 11 * 12;
            let catMonths = humanMonths / 6;
            console.log(`${catMonths} cat months`);
        }else if(sex === 'f'){
         let humanMonths = 12 * 12;
         let catMonths = humanMonths / 6;
         console.log(`${catMonths} cat months`)
        }
        break;
    default: console.log(`$(race) is invalid cat!`); break;
    }

  
    
  }
  solve(["Persian", "m"]);
  solve(["Siamese", "f"]);
  solve(["Siberian", "m"])

  