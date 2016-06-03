import { NameListService } from './name-list.service.ts';

export function main() {
  describe('NameListService', () => {
    let nameListService: NameListService;

    beforeEach(() => {
      nameListService = new NameListService;
    });

    
    it('should return the list of names', () => {
      let names = nameListService.get();
      expect(names).toEqual(jasmine.any(Array));
    });


  });
}
