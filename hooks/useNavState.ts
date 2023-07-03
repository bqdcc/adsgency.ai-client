import { createGlobalState } from "react-use";

const useNavState= createGlobalState<boolean>(true);

export default useNavState