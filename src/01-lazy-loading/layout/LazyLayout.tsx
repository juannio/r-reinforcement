
import { Navigation } from "../routes/LazyLayoutNavigation";


export const LazyLayout = () => {
    return (
        <div>
            <h2>Lazy Layout 1 page</h2>
            {/* Nested routes: routes for Lazy layout route */}
            <Navigation />
        </div>
    )
}

export default LazyLayout