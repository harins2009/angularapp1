export class Insurance{
    id:number;
    name:string;
    year:number;
    startDate:string;
    maturityDate:string;
    premiumAmt:number;

   


    constructor(id:number, name:string, year:number, startDate:string, maturityDate:string, premiumAmt:number){
        this.id=id;
        this.name=name;
        this.year=year;
        this.startDate=startDate;
        this.maturityDate=maturityDate;
        this.premiumAmt=premiumAmt;
    
    }
}