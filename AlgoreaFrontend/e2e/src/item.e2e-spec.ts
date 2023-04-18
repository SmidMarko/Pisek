import { retry } from './helpers/retry';
import { ItemPage } from './item.po';

describe('item page', () => {
  const page = new ItemPage();

  describe('activity page', () => {
    const motifArt = {
      id: '1625159049301502151',
      title: 'MOTIF ART',
      path: [ '1' ],
    };

    const pageLoadUseCases = [
      { label: 'without path', path: undefined },
      { label: 'with correct path', path: motifArt.path },
      { label: 'with incorrect path', path: [ 'invalid', 'path' ] },
    ];
    for (const useCase of pageLoadUseCases) {
      it(`should load ${useCase.label}`, async () => {
        await page.navigateToActivity(motifArt.id, useCase.path);
        const taskTitle = page.getActivityTitle();
        await page.waitUntilTextIsPresent(taskTitle, motifArt.title);
        await retry(() => expect(taskTitle.getText()).toBe(motifArt.title));
      });
    }
  });
});