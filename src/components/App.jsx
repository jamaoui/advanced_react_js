import {Slider} from "./ui/slider.jsx";
import {Skeleton} from "./ui/skeleton.jsx";
import {ThemeProvider} from "./theme-provider.jsx";

export default function App({children}) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    )
}
