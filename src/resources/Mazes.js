/*
    Stores maze string constants
 */

const mazes = {
    maze1:
    '##########\n' +
    '#A...#...#\n' +
    '#.#.##.#.#\n' +
    '#.#.##.#.#\n' +
    '#.#....#B#\n' +
    '#.#.##.#.#\n' +
    '#....#...#\n' +
    '##########',

    maze2: '###############B#############################################\n' +
    '##.....########.#......................................#...##\n' +
    '##.###.#........####################################.#.#.#.##\n' +
    '##.###.#.#########..........#########.......########.#.#.#.##\n' +
    '##.#####...........########.#.......#.#####.########.#.#.#.##\n' +
    '##.########################.#.#####.#.#...#.########.#.#.#.##\n' +
    '##............................#####.#.##.##.########.#.#.#.##\n' +
    '##.###.############################.#.##.##.########.#.#.#.##\n' +
    '##.###.##...#...#...#...#...#.......#.##.##.########.#.#.#.##\n' +
    '##.###....#...#...#...#...#...#######.##.##.########.#.#.#.##\n' +
    '##.##################################.##.##.########.#.#.#.##\n' +
    '##.......................................##.########.#.#.#.##\n' +
    '###########################################.########.#.#.#.##\n' +
    '###...............................#########..........#.#.#.##\n' +
    '########################.###########################.#.#.#.##\n' +
    '#........................#...........................#.#.#.##\n' +
    '#.######################.#############################.#.#.##\n' +
    '#.#..........#.........................................#.#.##\n' +
    '#.#.########.#.#########################################.#.##\n' +
    '#.#........#.#.#.........................................#.##\n' +
    '#.##########.#.#.#########################################.##\n' +
    '#............#.#.##........................................##\n' +
    '##############.#.#############################.#####.########\n' +
    '#..............................................#####........#\n' +
    '########################A####################################',

    maze3: '#######################################################################################################################################################################################\n' +
    '#A......#.....#.....#.#.....#.#...#.#.......#.....#.#...#.......#...........#...#.............#.....#.......#.........#.....#.....#...........#.#...................#.....#...........#\n' +
    '#.#######.#.#.#.###.#.#####.#.#.#.#.#####.#.#.###.#.#######.#.###.#.#.#.#.#####.#.#########.#.###.#.#.#.#.#.#.#.#.###.#.#####.#.#.#.#.#.#.#.#.#.#.#.###.#####.#.#.#.#.#.#.#.#.#.#.#.#.#\n' +
    '#.....#.#.....#.#...#.......#.......#...#...#.#.......#.....#.....#.........#...#...#.....#.........#.#...#.#.#.#.#...#.#...#.....#...#...#...#.#...#.#.#.#...........#.#.......#.#...#\n' +
    '#.#####.#.#.#.#.#.###.###.#.###.#.#.#.###.#.#.#.#.#.#.###.#.#.#######.#.#.#.###.#.#.#.#.#######.#.###.###.#.#.###.#####.#.#.#.#####.###.#.#.#########.#.#.#.###.#####.#.#.#####.#.#.###\n' +
    '#...#...#.#.#.....#...#.............#.#.......#.......#.#...#.#.........#.......#.#.....#.......#.......................#.#...#.#.#...#...#.#.#...#...#.......#.........#...#.#.....#.#\n' +
    '#.#.###.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#.###.###.###.#.#.#.#.###.###.###.#.#.#####.#.#.#.#.#.#.#.#.###.#.###########.#.#.#.#.#.#.#.###.###.#.#.#.#.#.#.#.#.#.#.#####.###.#.###.#.#####.#\n' +
    '#...#...#...#...#.#.#.#...#...#...#...#.....#...................#...#.#.....#...........#.....#.#.#...#.#...#.........#.#.......#...........#...#.....#...#.#...............#.#.......#\n' +
    '#.#.#.#.###.#.#.###.#######.#.#.#.#.#.#.###.#.###.#.#.#.###.#.#.#.#.#.#.#####.#.#.###.#.#.###.#.#.#.#.#.###.###.#.#.#.#####.#.###########.#.#.#.#########.#.#.###.###.###.#.#.###.#.#.#\n' +
    '#.#.........#...#.....#.....#.#...#...#.....#...............#...#.......#.#.#.......#.#...#.....#.#.#.........#.#.........#...#...#.........#.#...#.#.#...........#.....#.......#.....#\n' +
    '#.#.#.#.#.###.#.#.#.#.#.#.###.#########.#.#.###.#.#.#####.#####.#.#####.#.#.###.#.#.#.#.#.#.#.#.#.#.#.#.#.###.###.###.#.#.###.###.#.#.#.#.#.###.#.#.#.#.#.#####.###.#.#.#######.#.###.#\n' +
    '#...#.........#...#.#...#.#.#...........#.#.#...........#.......#.#.#.....#...#.#.#.#...#.......#.........#...#.....#...#.....#.#.....#.#...#.....#.#...#.....#.#.#.#.............#...#\n' +
    '#.#.###########.###.#.###.#.#####.#.#.#.###.#.###.#.#.#.#########.#.#.#####.#.#.#.#.#.#.#####.#.#.#.###.#.#.#.#.###############.#.###.#.#.#.#.#.###.###.#.#.#.#.#.#.#####.#.#.###.#.###\n' +
    '#.....#.#...........#.#.............#.#...........#.....#.#.....#...#.#.#.#...........#.#.....#...#.....#...#.....#...........#.#.#...#.........#.#.....#...#.......#.....#...#.......#\n' +
    '#####.#.#.#.#.#.#####.#.#####.#.#.#.#.###.#.#.###.#######.#.#.#####.#.#.#.#.#.#####.###.#.###.#.#.#.#####.#.#.###.#.###.#.###.#.#.###.#.###.###.#.#.#.#.###.#.#####.#.#.#.#####.#.###.#\n' +
    '#.....#.#.....#.#.......#.......#.....#...#...#...............#.....#...........#.........#.....#.#.#.............#.#...#.#.....#.#...#...#...#.........#.....#...#...#...........#...#\n' +
    '#.#.#.###.#.###.#.#.#.###.#.###.#.#.#.###.###.#.###.#.#.#.#####.#.#.#.###.#####.#####.#.#.#.###.#.###.###.#####.#.#.#.#.#.###.###.#.###.#.#.#.#.#.#####.#####.#.#.#.###.#.#.#.#####.###\n' +
    '#...#.....#.#.......#.....#.#.....#...#...#.#.#.....#...#.#...#.#.....................#.....#.....#.....#.......#.........#...#...#...#.#.#.#...#.#.#...#...#.....#.#.......#...#.....#\n' +
    '#####.###.###.#.#.#.#.#.#.###.#.#.#.#####.#.#.#.#.#.#######.#.#.#.#.#.#######.###.#.###.#.#.###.#.#.#.#.#.#####.#.#.#.###.#.###.###.#.###.#.###.#.#.#.#.###.#.###.###.#####.###.#.#####\n' +
    '#.....#.....#...#.....#.#...#...#.........#...................#.....#...#.........#.....#...........#...#.#.......#.#...#...#...............#.......#...#.........#.............#.....#\n' +
    '#.#.#.#.#######.#.#.#########.#######.###.#####.###.#.###.#.#######.#.###.#.###.###.###.#####.#####.###.#.#.#.#.#.#.#.###.#.#.#######.#.#.#.#.#.#.#.#.#####.#.#.#.#.#.#.###.#.#.###.#.#\n' +
    '#.#.#.......#...#.#...#.......#.................#.....#...#.......#.#.....#.....#.#...#.#.....#...#.#.......#...#.....#.....#.....#.......#.....#...#.#...#.....#...#.#.#...#...#.....#\n' +
    '###.#.#####.#.###.###.#.#.###.#.###.#####.#.#.#######.#.#########.#####.#.#.#.###.#.#.#.###.#######.#.#########.#.#.#.#.#.#.#####.###.###.###.#.#.#.#.#.#.#.###.#.#.#.#.#####.#.#.###.#\n' +
    '#.#...#.....#.....#.#.....#...#...#.#...#...#.#.#.#.....#.....#.#.#.#.....#.................#.#.#...#...#...#.#.#.#.#.#...#...#.#.............#.#...#...#.#.#.......#.........#.#.....#\n' +
    '#.###.#.###.#.#.#.#.###.#.#.###.#####.#.###.#.#.#.#.#.###.#.#.#.#.#.#.#.#.#.#.#####.###.#.###.#.#.###.#.#.#.#.#.#.#.#.#.###.#.#.###.#.#.#.#######.#.###.#.#.#.###.#.#.#.###.###.#.#.#.#\n' +
    '#.#...#.....#.....#.#...#...#.......#...#.....#.#.#.....#.#...#...#...#.#.........#.....#...#.#...#...#...#.#.#.......#...#.#...#...#.#...#.....#.......#.......#.#.....#.#...#.#.....#\n' +
    '#.#.#.#.#.#.#.###.#.###.#.#.#.###.###.#.#.###.###.#.#.#.#.###.#.#.#.#.#.#.#########.#.#.#.#.#.#######.#.###.#.#.#.#.#.#.###.#.###.#######.#.#.#.#.###.#.#.#.#.#.#.#.#####.###.#.#.###.#\n' +
    '#.....#.....#.#...#.#.#...#.....#.....#.#...#.....#.....#.....#.#.#...#...#.#.....#.#.#...#...#.......#.....#...........#...#.#...#.......#.......#.#.#...#.#...#.#.#...........#.....#\n' +
    '#.#####.#####.#####.#.###.#########.#.#.#.#.###.#.#.#.#.#.#.#.#####.###.#.#.#.###.#.###.#.#####.###.#####.#####.#.###.###.#.#.#.#.#.###.#.#.#####.#.#.###.###.###.#.#.#.#.#.###.###.#.#\n' +
    '#.....#...#...#.#...#.........#.................#.#.....#.#.....#.........#...#.....#...#.#.....#.......#.......#.....#.#.#.......#.#...#.#...#.#.........#.........#...#.....#.....#.#\n' +
    '#.###.#####.#.#.#.#.#.#######.#.#####.#########.#.#.###.#.#####.#.#####.###.#.#.#.#.###.#.#.#.#.###.#.#####.#.###.###.#.#.#.###.#.#.#.#.#.#.#.#.#.#####.#.#.###.#.#.#.#.#.#.#.###.###.#\n' +
    '#.#...#.#.....#...#.#.#.......#.#.................#...#.....#...............#.........#...#.#.#...#.#...#...#.........#.....#...........#.#...........#.....#.#.#.#...#...#...#.#.#...#\n' +
    '#.#.#.#.#.###.#######.#.#.#.###.#.#.#.###.#.#.###.###.#.###.#.#####.#.#.#.#.#.###.#########.#.#.#.#.#.#.#######.###.#.#.###.#.#.###.#.###.#.#.###.#.#.#.#.#.#.#.#.#.###.#####.#.###.#.#\n' +
    '#.#.....#.....#.#.......#...#...#...#.#...#.....#.......#...#...#...#.#.#...#...#.....#.#...#...........#.........#...#.#...#...#...#...#...........#.#.#...#...........#.....#.#.....#\n' +
    '###.#.###.#####.#.#.#.#.#.###.#.#.#####.#.#.#.#.#.#.#.###.###.#.#.###.#.###.###.#####.#.#.###.#.#.###.#.#.#.###.#####.###.#####.#.#.###.#.#####.#.#.#.#####.###.###.###.#.#.#.#.#.#.###\n' +
    '#.........#.....#.....#...#...............#.#...#.#.#.....#.#...#...#.#...............#.......#.......#.#...#.#...........#.#.#...............#...#.........#...............#...#...#.#\n' +
    '#.#.#.###.#.#####.#.#.#.#.#.#.###.###.###.#####.#.#####.###.#.#.###.#.###.###.#####.#####.#####.#########.###.#.#.#.#.#.#.#.#.#.#.#.#.###.#.#.###.#####.###.#####.###.#.###.###.#.#.#.#\n' +
    '#.....#.#.............#...#.......#.#.............#.#...#.#...#...#.#.....#.#.#...#.#.....#...#...........#.....#.#.#...#...................#.....#.....#...............#.....#.#.....#\n' +
    '#.#####.#.###.#.#######.###.###.#.#.#.###.###.#.###.#.#.#.###.#.#.#.#####.#.###.###.#########.#.#####.#.#.#.#.#.#.#.#####.#########.#.#.#.#.###.###.#.#####.#.#.###.#####.#.#.###.###.#\n' +
    '#...#.....#.#.#.#...............#.........#.....#.......#.........#...........#...#.......#.#...#.......#.....#...#.#...#.#...#.#.....#...........#.................#...#.#.#.#...#.#.#\n' +
    '#.#.#.#####.#.###.###.#.#.#####.#.#####.###.#.###.#.#######.#.#.###.###.###.#.#.#.#.#.#.#.#.#.#.#.#.#######.#######.#.#.###.###.#.###.#.###.#.#.#.#.#.#######.#.#.###.#.###.#####.#.#.#\n' +
    '#.....#.#.....#...#...#.#.......#...#.............#...#.....#...#.#.......#.....#...#...#.#.....#.#...........#.......#.#...#...#.#...#.#.#.....#...............#...#.#.#...#...#.....#\n' +
    '#####.#.#.#.###.#.###.#.#####.#######.#############.#.#.#.#.#.###.#.#.###.#.#####.#.#.#.#####.#.#.###.###.#.#.#.###.#.#.###.#.#.#.#.#.#.#.#.#.###.###.#.#######.###.#.#####.#######.###\n' +
    '#.....#...........#.....#.....#.......#...#...#.......#.....#.#...#.#.#...#.#...#.....#.......#...#...#...#.#.#.#.....#.....#...#.#...#.......#...#...#.....#...#...#.........#.#....B#\n' +
    '#######################################################################################################################################################################################'

}

export default mazes