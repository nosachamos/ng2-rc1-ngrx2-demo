import {databaseList} from './database-list.reducer';
import {DatabasesListActions} from './database-list.reducer';
import {Database} from '../../models/database.model';

export function main() {
  describe('Database list reducer', () => {

    it('should return state when action doesn\'t match', () => {
      const state = [];
      const actual = databaseList(state, { type: 'unknown_action' });
      const expected = state;
      expect(actual).toBe(expected);
    });


    it('should ignore databases sent with the refresh action', () => {
      const state = [];

      const db: Database[] = [
        {
          "id": 97,
          "name": "asm_ci_1",
          "size": 916352,
          "created": new Date(),
          "owner": "",
          "set_Owner_Url": "http://www.internalassemble.com/api/databases/97/owner"
        }
      ];
      const actual = databaseList(state, { type: DatabasesListActions.REFRESH_DATABASE_LIST, payload: db });
      const expected = state;
      expect(actual).toBe(expected);
    });


    it('should ignore unknown action', () => {
      const state: Database[] = [
        {
          "id": 97,
          "name": "asm_ci_1",
          "size": 916352,
          "created": new Date(),
          "owner": "",
          "set_Owner_Url": "http://www.internalassemble.com/api/databases/97/owner"
        }
      ];
      const actual = databaseList(state, { type: 'UNKNOWN ACTION' });
      const expected = state;
      expect(actual).toBe(expected);
    });



  });



}
