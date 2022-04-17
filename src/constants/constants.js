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
