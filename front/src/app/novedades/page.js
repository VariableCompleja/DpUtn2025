import NovedadItem from "@/components/NovedadItem";
import "@/styles/novedades.css"

export const metadata={
    title:"Educode::Novedades",
    description:"MiNovedades",
};

export default function Novedades(){
    return(
        <section className="holder">
            <h2 className="novedades">Novedades</h2>
            {}
            <NovedadItem/>
        </section>
    )
}