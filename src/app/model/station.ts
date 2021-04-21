export interface Station {
    id: number;
    name: string;
    address: string;
    //operational is true
    operational: boolean;
    //free is true
    price: boolean;
    cleanliness: number;
    safeness: number;
}
