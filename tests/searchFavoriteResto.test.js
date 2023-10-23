import searchBarFavorite from '../src/scripts/utils/searchbar-favorite';

// Mock untuk document.querySelectorAll
document.querySelectorAll = jest.fn((selector) => {
    if (selector === '.profile-resto__name-resto') {
        return [
            { innerText: 'Resto 1' },
            { innerText: 'Resto 2' },
            { innerText: 'Resto 3' },
        ];
    }
    if (selector === '.profile-resto__city-resto') {
        return [
            { innerText: 'City 1' },
            { innerText: 'City 2' },
            { innerText: 'City 3' },
        ];
    }
    if (selector === 'card-resto') {
        return [{}, {}, {}];
    }
    return [];
});

describe('searchBarFavorite', () => {
    let searchBar;
    beforeEach(() => {
        searchBar = document.createElement('input');
        searchBar.classList.add('search-bar');
        document.body.appendChild(searchBar);
    });

    afterEach(() => {
        document.body.removeChild(searchBar);
    });

    it('should filter cards based on search input', () => {
        searchBarFavorite.init(searchBar);

        searchBar.value = 'Resto 1';
        searchBar.dispatchEvent(new Event('input'));

        const cardResto = document.querySelectorAll('card-resto');
        expect(cardResto[0].classList.contains('hidden')).toBe(false);
        expect(cardResto[1].classList.contains('hidden')).toBe(true);
        expect(cardResto[2].classList.contains('hidden')).toBe(true);

        searchBar.value = 'City 2';
        searchBar.dispatchEvent(new Event('input'));

        expect(cardResto[0].classList.contains('hidden')).toBe(true);
        expect(cardResto[1].classList.contains('hidden')).toBe(false);
        expect(cardResto[2].classList.contains('hidden')).toBe(true);
    });
});
