import { useMediaQuery } from "react-responsive";

const desktop = () => useMediaQuery({ query: "(min-width: 1824px)" });
const tablet = () => useMediaQuery({ query: "(max-width: 1224px)" });
const portrait = () => useMediaQuery({ query: "(orientation: portrait)" });
const mobile = () => useMediaQuery({ query: "(max-width: 980px)" })

const screen = {

    desktop,
    tablet,
    portrait,
    mobile
};

export default screen;