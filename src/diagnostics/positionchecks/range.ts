export class Range {

    area : string;
    start : number;
    end : number;
   
    constructor(area : string, start_stack : number,  end_stack : number) {
        this.area = area;
        this.start = start_stack;
        this.end = end_stack;
    }

    covers(area : string, stack : number) : boolean {
        if (area !== this.area) {
            return false;
        }
        
        if (this.start <= stack && stack <= this.end) {
            return true;
        }

        return false;
    }

}