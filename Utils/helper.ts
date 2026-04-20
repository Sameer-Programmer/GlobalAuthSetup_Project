import fs from 'fs-extra';

export class Utils {

  static readTextFile(path:string){
    return fs.readFile(path,'utf-8')
  }

   static writeText(path:string,data:any){
    fs.writeFileSync(path,data,'utf-8')
  }

  static  readPdf(path:string){
    return  fs.readFileSync(path)
  }

  static async readJson(path:string){
    return await fs.readJSON(path)
  }


 

  static async writeJsonFile(path:string,data:any){
    fs.writeJSON(path,data)
  }


  // below are best built in methods from fs-extra 
  static writeJson(path: string, data: any) {
  fs.writeJSONSync(path, data);
}

static readJsonFiles(path: string) {
  return fs.readJSONSync(path);
}

}