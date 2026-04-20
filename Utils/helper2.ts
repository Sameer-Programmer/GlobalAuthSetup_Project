import fs from 'fs'

class Utils2 {

    static readJsonFile(path: string) {
        const data = fs.readFileSync(path, 'utf-8');
        JSON.parse(data)
        return data
    }

    static writeJsonFile(path:string , data:any){
        fs.writeFileSync(path,JSON.stringify(data,null,2))
    }



}