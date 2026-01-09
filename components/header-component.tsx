'use client'
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {MenuIcon, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export const sites =[
    {
        name: "О проекте",
        href: "/"
    },
    {
        name:"Статус систем",
        href: "https://status.unicorns-group.ru"
    }
    ]

function HeaderComponent()
{
    const [sidebarVisibility, changeSidebar] = useState(false);

    return(
        <>
            <header className={"h-1/6 mx-2 md:mx-20 flex flex-row flex-1 py-4"}>
                <div className={"flex flex-none items-center w-48 md:w-64 mx-4"}>
                    <Image src={'/UNICGROUP-WHITE.png'} alt={"LOGO"} width={64} height={0} layout="responsive"
                           className={""}/>
                </div>
                <div className={"hidden md:visible md:flex flex-1 grow items-center"}>
                    <NavigationMenu className={"flex flex-row"}>
                        <NavigationMenuList className={"flex flex-row flex-1 grow items-center"}>
                            {
                                sites.map((site) => (
                                    <NavigationMenuItem key={site.name}>
                                        <Link href={site.href}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {site.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className={"visible md:hidden shrink-1 self-center ml-auto mr-4"}>
                    <Button variant={"ghost"} onClick={() => {
                        changeSidebar(true)
                    }}>
                        <MenuIcon></MenuIcon>
                    </Button>
                </div>

            </header>
            <div
                className={`${sidebarVisibility ? 'visible' : 'hidden'} md:hidden fixed w-screen h-screen bg-black bg-opacity-50 left-0 top-0 z-20`}
            >
                <div className="absolute w-1/2 h-full bg-black top-0 right-0 flex flex-col py-4 z-30">
                    <Button variant="ghost" className="w-8 h-8 mx-4 place-self-end"  onClick={() =>changeSidebar(false)}>
                        <X></X>
                    </Button>
                    <div className="flex my-2 self-end gap-2 flex-col items-end w-full">
                        {sites.map((site) => (
                            <Button variant="ghost" className="w-full justify-end mx-0 pr-8" key={site.name} onClick={() =>changeSidebar(false)}>
                                <Link href={site.href}>{site.name}</Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}


export default HeaderComponent;