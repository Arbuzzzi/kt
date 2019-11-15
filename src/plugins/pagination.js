/**
 * https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 * @param {Number} c - текущий номер страницы
 * @param {Number} m - всего страниц
 * @returns {[]} - Selected page 6: [1, "...", 4, 5, 6, 7, 8, "...", 20]
 */
export default function (c, m) {
	let current = c,
		last = m,
		delta = 2,
		left = current - delta,
		right = current + delta + 1,
		range = [],
		rangeWithDots = [],
		l;

	for (let i = 1; i <= last; i++) {
		if (i === 1 || i === last || i >= left && i < right) {
			range.push(i);
		}
	}

	for (let i of range) {
		if (l) {
			if (i - l === 2) {
				rangeWithDots.push(l + 1);
			} else if (i - l !== 1) {
				rangeWithDots.push('...');
			}
		}
		rangeWithDots.push(i);
		l = i;
	}

	return rangeWithDots;
}
