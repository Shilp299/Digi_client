import {Injectable} from "@angular/core";
import {Quality} from "./quality";


@Injectable()
export class Qualities {

  private  qualities: Array<Quality> = new Array<Quality>();
  private  totalItems: number;

  public setQualities (qualities: Array<Quality>) {
    this.qualities = qualities;
  }
  public getQualities (): Array<Quality> {
    return this.qualities;
  }
   public deleteQuality(qualityId: string) {
    let qualityFound: Quality = this.qualities.find(quality => qualityId === quality.getId());
    const index: number = this.qualities.indexOf(qualityFound);
    if (index !== -1) {
      this.qualities.splice(index, 1);
      this.totalItems--;
    }
  }

  public addQuality(quality: Quality) {
    this.qualities.push(quality
    );
    this.totalItems++;
  }
  public setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  public getTotalItems() {
    return this.totalItems;
  }
}
