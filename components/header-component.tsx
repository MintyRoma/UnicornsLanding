'use client'
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const sites =[
    {
        name: "О проекте",
        href: "/"
    }
    ]

function HeaderComponent()
{
    return(<header className={"h-1/6 mx-16 flex flex-row flex-1 py-4"}>
        <section className={" flex items-center mr-8"}>
            <Image src={'/UNICGROUP-WHITE.png'} alt={"LOGO"} width={256} height={0} className={"mx-8"}/>
        </section>
        <section className={"flex flex-1 grow items-center"}>
            <NavigationMenu className={"flex flex-row"}>
                <NavigationMenuList className={"flex flex-row flex-1 grow items-center"}>
                    {
                        sites.map((site) => (
                        <NavigationMenuItem key={site.name} >
                            <Link href={site.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {site.name}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </section>
    </header>)
}

export default HeaderComponent;