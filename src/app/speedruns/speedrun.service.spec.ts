import { TestBed } from '@angular/core/testing';

import { SpeedrunService } from './speedrun.service';

describe('SpeedrunService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeedrunService = TestBed.get(SpeedrunService);
    expect(service).toBeTruthy();
  });
});
