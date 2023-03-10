import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";
class Customers {
    constructor(name, address, cardNumber, pin) {
        this.name = name;
        this.address = address;
        this.cardNumber = cardNumber;
        this.pin = pin;

    }

    readDB(){
        const _filename=fileURLToPath(import.meta.url);
        const _dirname=path.dirname(_filename);
        const pathDB=path.join(_dirname,'../../../DB/customer.db.json')
        if (fs.existsSync(pathDB)) {
            const listDb = JSON.parse(fs.readFileSync(pathDB, { encoding: 'utf-8' })) 
            return listDb
        }
    }
    writeDb(newArray) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const pathDB = path.join(__dirname, '../../../DB/customer.db.json')
        if (fs.existsSync(pathDB)) {
            fs.writeFileSync(pathDB,JSON.stringify(newArray))
        }
   }
    createCustomers() {
        const newCustomer = {[this.cardNumber]: { name: this.name ,address:this.address,pin:this.pin}};
        const listCustomer=this.readDB()
        
        this.writeDb(newCustomer)
    }

    // getCustomer(cardNumber){
    //     const customersList= this.readDB()

    //     for (const key in customersList) {
    //         if (Object.hasOwnProperty.call(customersList, key)) {
    //             const element = customersList[key];
    //             console.log(element.name=="Jose Carlos Gonzalez")
    //             break;               
    //         }
    //     }
    // }


    //metodo ṕara verificar password

    //verifyPassword(1234,6552672123123)
    verifyPassword(pin,numbercard) {
        const listCustomer=this.readDB();
        const customer=listCustomer[numbercard] //objeto || undefined
        //esta sintaxis valida las tres opciones (undefined,null,false)
        if(!customer){
            return 'Tarjeta no existe'
        }
        if(customer.pin!=pin){
            return 'PIN inválido'
        }

        return 'Todo correcto'

        //////////////////////////////////////////////
        // if(customer){
        //     if(customer.pin==pin){
        //         return 'valido'
        //         if(fechanacioment){
        //             si es
        //         }else{
        //             no no es
        //         }
        //     }else {
        //         return 'pin incorrecto'
        //     }
        // }else {
        //     return 'no existe'
        // }

        
        
    }

}
export default Customers;