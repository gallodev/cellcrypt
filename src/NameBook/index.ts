export default class NameBook{
    nameList : Array<string>;

    constructor(nameList : Array<string>){
        this.nameList = nameList;
    }

    isConsistentName(){        
        let nameList = this.nameList.toString().split(",");
        let isConsistent = false;

        nameList.sort(function(curValue,nextValue){         
            let nameA = curValue.toLowerCase();
            let nameB = nextValue.toLowerCase();
            
            if (nameA < nameB){             
                isConsistent = true;
                return -1;
            }
            if (nameA > nameB)                
                return 1;
            
            return 0;
        });
        
        return isConsistent;

    }
        
}