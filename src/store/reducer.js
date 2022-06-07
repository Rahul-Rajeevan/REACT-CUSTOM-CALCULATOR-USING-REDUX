export const reducer=(obj,action)=>{
       switch(action.type)
    {   
        case "INC": {
        obj.count++
        return {...obj}
        }
        case "DEC": {
        obj.count--
        return {...obj}
        }
        case "ADD": {
            obj.count+=Number(obj.payload)
            return {...obj}
            }
            case "SUB": {
        obj.count-=Number(obj.payload)
        return {...obj}
        }
        case "MUL": {
            obj.count*=Number(obj.payload)
            return {...obj}
            }
        case "DIV": {
            obj.count/=Number(obj.payload)
            return {...obj}
            }
        default:return obj;
    }
}

