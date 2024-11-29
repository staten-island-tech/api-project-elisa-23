import { getData } from "./create";
import { gallery, homepage } from "./dropdown";
import { search } from "./search";

async function main() {
    await getData();
    await search();
    await gallery();
    await homepage();
}

main()