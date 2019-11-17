export function diffCollections(a, b) {
    if (!a || !b) return { diff: false };
    const first = { has: [], doesNotHave: [] };
    const second = { has: [], doesNotHave: [] };
    a.forEach(i => {
        const foundItem = b.find(x => x.id === i.id);
        if (!foundItem) {
            first.has.push(i);
            second.doesNotHave.push(i);
        }
    });
    b.forEach(i => {
        const foundItem = a.find(x => x.id === i.id);
        if (!foundItem) {
            second.has.push(i);
            first.doesNotHave.push(i);
        }
    });
    const diff = !![
        first.has,
        first.doesNotHave,
        second.has,
        second.doesNotHave
    ].find(a => a.length > 0);
    return { diff, first, second };
}
