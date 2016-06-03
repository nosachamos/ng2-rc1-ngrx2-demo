import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes',
  pure: true
})
export class BytesPipe implements PipeTransform {
  static units: string[] = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  transform(value: number, args: any[]): any {
    var multiplier = this.getMultiplier(args);

    var num = value * multiplier;
    var unit = 0;

    while (num > 1024 && unit < 8) {
      num /= 1024;
      unit++;
    }

    return parseFloat(num.toString()).toFixed(1) + " " + BytesPipe.units[unit];
  }

  private getMultiplier(args: any[]): number {
    if (args == null) {
      return 1;
    }

    var input = args.toString().toLowerCase();
    if (input === "kb") {
      return 1024;
    } else if (input === "mb") {
      return 1024 * 1024;
    } else if (input === "gb") {
      return 1024 * 1024 * 1024;
    } else if (input === "tb") {
      return 1024 * 1024 * 1024 * 1024;
    } else {
      throw "Invalid byte-specifier: " + input;
    }
  }
}
