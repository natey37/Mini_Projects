export const selectOptionsArray = Array.from(new Array(5).fill().map((x, index) => ((index + 1) * 10) * ((index + 1) * 10)))

export const areaMap = {
    100: {
        width: 10,
        height: 10
    },
    400: {
        width: 20,
        height: 20
    },
    900: {
        width: 30,
        height: 30
    },
    1600: {
        width: 40,
        height: 40
    },
    2500: {
        width: 50,
        height: 50
    }
}

export const operations = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

export const TopRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
export const MidRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
export const BotRowKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

export const isFlippedBoard = {
    0: [false, false, false, false, false],
    1: [false, false, false, false, false],
    2: [false, false, false, false, false],
    3: [false, false, false, false, false],
    4: [false, false, false, false, false],
    5: [false, false, false, false, false],
}

