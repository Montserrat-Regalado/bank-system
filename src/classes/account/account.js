import fs from "fs"
import path from "path"
import { fileURLToPath } from "url";

class Account{
    constructor(number,balance){
        this.number=number;
        this.balance=balance
    }

    readDB(){
        const _filename=fileURLToPath(import.meta.url);
        const _dirname=path.dirname(_filename);
        const pathDB=path.join(_dirname,'../../../DB/account.db.json')
        if (fs.existsSync(pathDB)) {
            const listDb = JSON.parse(fs.readFileSync(pathDB, { encoding: 'utf-8' })) 
            return listDb
        }
    }
    writeDb(newArray) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const pathDB = path.join(__dirname, '../../../DB/account.db.json')
        if (fs.existsSync(pathDB)) {
            fs.writeFileSync(pathDB,JSON.stringify(newArray))
        }
   }

   createCustomers(){
    const newAccount={[this.number]:{balance:this.balance}};
    const listAccount=this.readDB()

    this.writeDb(newAccount)
   }

   deposit(amountToSave,number){
    const accountlist=this.readDB();
    const account=accountlist[number];
    console.log(account)
    console.log(accountlist)

    if(account===undefined){
        return 'account doesnot exist'
    }

    //0
    account.balance+=amountToSave
    
    this.writeDb({[number]:account,...accountlist})
    

   }


}

export default Account ;