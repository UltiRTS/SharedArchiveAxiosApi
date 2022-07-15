import {getMapListByBatch, mapExists,getMap,vague_search} from './api.mjs';

async function main() {
    const mapExistance = await mapExists('1');
    // console.log(mapExistance);
    const maps = await getMapListByBatch('0');
    // console.log(maps);
    const map = await getMap('1');
    console.log(map);
    const query = await vague_search('test');
    console.log(query);
}

main()