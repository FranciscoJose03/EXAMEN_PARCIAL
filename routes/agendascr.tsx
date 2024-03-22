import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../islands/Form.tsx";
import {Contacto} from "../type.ts" 



type Data = {
    arrcontact: Contacto[]
}

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        const form = await req.formData();
        const data={
            name: form.get("name")?.toString(),
            email: form.get("email")?.toString()
        }
        const contacto: Contacto = {
            nombre: data.name,
            mail: data.email
        }
        const arr: Data = {
            arrcontact: []
        }
        arr.arrcontact.push(contacto)
        console.log(arr)
        return ctx.render({arr})
    }
};

const Page = (props:PageProps<{arr: Data}>) => {
    return(
        <body>
            <div class = "header"><a href={"/agendascr"}>Agenda Client Side</a> <a href={"/agendassr"}>Agenda Server Side</a></div>
            <h1>My Agenda</h1>

            {props.data?.arr?.arrcontact?.length > 0 && 
            <div class = "agendaList">
                {props.data.arr.arrcontact.map(e => {
                    return(
                        <div><p>{e.nombre}</p><p>{e.mail}</p></div>
                    )
                })}
            </div>
            }
            <div><Form/></div>
        </body>
    )
}
export default Page;
