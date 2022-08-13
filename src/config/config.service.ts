import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  get(key: string): string {
    return this.envConfig[key];
  }
}
