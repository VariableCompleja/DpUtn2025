import NovedadItem from "@/components/NovedadItem";

export const metadata={
    title:"Educode::Novedades",
    description:"MiNovedades",
};

export default function Novedades(){
    return(
        <section className="holder">
            <h2>Novedades</h2>
            {}
            <NovedadItem/>
        </section>
    )
}