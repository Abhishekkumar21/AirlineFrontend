export interface Iflight {
  fId: number;
  fname: string;
  source: string;
  destination: string;
  arrTime: string;
  deptTime: string;
  duration: number;
  type: string;
  row: number;
  col: number;
  fare: number;
  //have to change the fair to fare in database, if error occurs change the allm the names
}
