/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let checkMas = [];

    for (let i = 0; i < preferences.length; i++) {
        if (preferences[i] === undefined) { continue; }

        if (!checkMas.length) {
            checkMas.push(i);
        }
        while (checkMas.length !== 4) {
            let nextSpichonee = preferences[checkMas[checkMas.length-1]];
            checkMas.push(nextSpichonee-1);
        }

        if (checkMas[0] === checkMas[3] && checkMas[1] !== checkMas[2]) {
            count++;

            checkMas.forEach((v, i, a) => {
                delete preferences[v];
            });
        }

        checkMas.length = 0;
    }

    return count;
};