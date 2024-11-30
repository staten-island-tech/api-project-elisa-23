import { getData } from "./create";
import { gallery } from "./dropdown";
import { search } from "./search";

async function main() {
    await getData();
    await search();
    await gallery();
}

main()