import { Footer } from "../../components/Footer"
import { NavbarFixed } from "../../components/NavbarFixed"

export default function Endereco() {
    return (
        <div className="d-flex flex-column justify-content-between h-100" style={{height: '100vh'}}>
            <NavbarFixed />
            <Footer />
        </div>
    )
}