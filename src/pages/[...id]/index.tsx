import Search from "../../components/ComponentsPages/Search";
import {ByVehicle} from "../../components/ComponentsPages/ByVehicle";

export default function Index({isVehicle}) {
    if(!isVehicle) {
        return <Search />
    } else {
        return <ByVehicle />
    }
}
export async function getServerSideProps({params, resolvedUrl}) {
    const id = params.id;
    const pattern = new RegExp('.phtml$');
    const isVehicle = pattern.test(id[id.length - 1]);
    return {
        props: {
            isVehicle: isVehicle
        }
    }
}